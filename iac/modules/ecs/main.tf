################################################################################
# Create ECS Cluster
################################################################################

resource "aws_ecs_cluster" "this" {
  name = "${var.name}-ecs-cluster"
}

################################################################################
# Create ECS Log Group
################################################################################

resource "aws_cloudwatch_log_group" "this" {
  name              = "${var.name}-ecs-log-group"
  retention_in_days = 7
}

################################################################################
# Create ECS Roles
################################################################################

resource "aws_iam_role" "ecs_task" {
  name               = "${var.name}-ecs-task-role"
  assume_role_policy = templatefile("../templates/ecs-task-policy.json", {})
  path               = "/ECS/"
}

resource "aws_iam_role" "ecs_task_execution" {
  name               = "${var.name}-ecs-execution-role"
  assume_role_policy = templatefile("../templates/ecs-task-policy.json", {})
  path               = "/ECS/"
}

resource "aws_iam_role_policy" "ecs_task_definition_policy" {
  name   = "${var.name}-ecs-execution-policy"
  role   = aws_iam_role.ecs_task_execution.name
  policy = templatefile("../templates/ecs-task-execution-policy.json", {
    ecr_arn = var.ecr_arn
  })
}

################################################################################
# Create ECS Task Definition
################################################################################

resource "aws_ecs_task_definition" "this" {
  family                   = "${var.name}-ecs-task-definition"
  task_role_arn            = aws_iam_role.ecs_task.arn
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  container_definitions    = templatefile("../templates/ecs-task-definition.json", {
    docker_repository = var.ecr_url
    app_version       = var.app_version
    awslogs_group     = aws_cloudwatch_log_group.this.name
    short_name        = var.short_name
  })
}

################################################################################
# Create ECS Service
################################################################################

resource "aws_ecs_service" "this" {
  name                               = "${var.name}-ecs-service"
  cluster                            = aws_ecs_cluster.this.id
  task_definition                    = aws_ecs_task_definition.this.arn
  desired_count                      = 1
  launch_type                        = "FARGATE"
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 100
  health_check_grace_period_seconds  = 0

  network_configuration {
    subnets = var.public_subnet_ids
    security_groups  = [var.security_group_id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = var.target_group_arn
    container_name   = var.short_name
    container_port   = 3000
  }

  lifecycle {
    ignore_changes = [desired_count]
  }
}

################################################################################
# Create Autoscaling Policy
################################################################################

resource "aws_appautoscaling_target" "this" {
  min_capacity       = 1
  max_capacity       = 3
  resource_id        = "service/${aws_ecs_cluster.this.name}/${aws_ecs_service.this.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "this" {
  name               = "cpu-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = "service/${aws_ecs_cluster.this.name}/${aws_ecs_service.this.name}"
  scalable_dimension = aws_appautoscaling_target.this.scalable_dimension
  service_namespace  = aws_appautoscaling_target.this.service_namespace

  target_tracking_scaling_policy_configuration {
    target_value       = 70
    scale_in_cooldown  = 90
    scale_out_cooldown = 45

    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
  }
}
