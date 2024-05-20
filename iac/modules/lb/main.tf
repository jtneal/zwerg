################################################################################
# Create Load Balancer
################################################################################

resource "aws_lb" "this" {
  name            = "${var.name}-lb"
  security_groups = [var.security_group_id]
  subnets         = var.public_subnet_ids

  enable_deletion_protection = true
}

################################################################################
# Create Target Group
################################################################################

resource "aws_lb_target_group" "this" {
  name                 = "${var.name}-lb-tg"
  port                 = 80
  protocol             = "HTTP"
  target_type          = "ip"
  vpc_id               = var.vpc_id
  deregistration_delay = 30
  depends_on           = [aws_lb.this]

  health_check {
    path                = "/healthcheck"
    unhealthy_threshold = 2
    matcher             = "200"
  }

  stickiness {
    type            = "lb_cookie"
    cookie_duration = 86400
    enabled         = false
  }
}

################################################################################
# Create Route53 Records
################################################################################

data "aws_route53_zone" "this" {
  name         = var.domain
  private_zone = false
}

resource "aws_route53_record" "this" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_lb.this.dns_name
    zone_id                = aws_lb.this.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "this_www" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  ttl     = "300"
  records = ["${var.domain}."]
}

################################################################################
# Create Listeners
################################################################################

data "aws_acm_certificate" "this" {
  domain      = var.domain
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

resource "aws_lb_listener" "this_http" {
  load_balancer_arn = aws_lb.this.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "this_https" {
  load_balancer_arn = aws_lb.this.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = data.aws_acm_certificate.this.arn

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      status_code  = "404"
    }
  }
}

################################################################################
# Create Listener Rules
################################################################################

resource "aws_lb_listener_rule" "listener_to_container" {
  listener_arn = aws_lb_listener.this_https.arn

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.this.arn
  }

  condition {
    host_header {
      values = [aws_route53_record.this.fqdn]
    }
  }
}

resource "aws_lb_listener_rule" "www_redirect" {
  listener_arn = aws_lb_listener.this_https.arn

  action {
    type = "redirect"

    redirect {
      host        = aws_route53_record.this.fqdn
      status_code = "HTTP_301"
    }
  }

  condition {
    host_header {
      values = [aws_route53_record.this_www.fqdn]
    }
  }
}
