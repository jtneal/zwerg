output "alb_security_group_id" {
  value = aws_security_group.this_alb.id
}

output "ecs_security_group_id" {
  value = aws_security_group.this_ecs.id
}
