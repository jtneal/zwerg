################################################################################
# Create ALB Security Group
################################################################################

resource "aws_security_group" "this_alb" {
  name   = "${var.name}-alb"
  vpc_id = var.vpc_id
}

resource "aws_security_group_rule" "this_alb_outbound" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.this_alb.id
}

resource "aws_security_group_rule" "this_alb_inbound_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.this_alb.id
}

resource "aws_security_group_rule" "this_alb_inbound_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.this_alb.id
}

################################################################################
# Create ECS Security Group
################################################################################

resource "aws_security_group" "this_ecs" {
  name   = "${var.name}-ecs"
  vpc_id = var.vpc_id
}

resource "aws_security_group_rule" "this_ecs_outbound" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.this_ecs.id
}

resource "aws_security_group_rule" "this_ecs_inbound" {
  type              = "ingress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  self              = true
  security_group_id = aws_security_group.this_ecs.id
}

resource "aws_security_group_rule" "this_ecs_inbound_alb" {
  type                     = "ingress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  security_group_id        = aws_security_group.this_ecs.id
  source_security_group_id = aws_security_group.this_alb.id
}
