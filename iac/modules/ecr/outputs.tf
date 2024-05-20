output "ecr_arn" {
  value = aws_ecr_repository.this.arn
}

output "ecr_url" {
  value = aws_ecr_repository.this.repository_url
}
