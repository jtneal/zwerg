output "vpc_id" {
  value = aws_vpc.this.id
}

output "public_subnet_ids" {
  value = [
    aws_subnet.this_public_a.id,
    aws_subnet.this_public_b.id,
    aws_subnet.this_public_c.id
  ]
}

output "private_subnet_ids" {
  value = [
    aws_subnet.this_private_a.id,
    aws_subnet.this_private_b.id,
    aws_subnet.this_private_c.id
  ]
}
