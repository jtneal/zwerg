################################################################################
# Create ECR Repository
################################################################################

resource "aws_ecr_repository" "this" {
  name = "${var.name}-ecr"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "this" {
  repository = aws_ecr_repository.this.name
  policy     = templatefile("../templates/ecr-lifecycle-policy.json", {})
}

################################################################################
# Create ECR User
################################################################################

resource "aws_iam_user" "ecr_user" {
  name = "user-${aws_ecr_repository.this.name}"
}

resource "aws_iam_access_key" "ecr_key" {
  user = aws_iam_user.ecr_user.name
}

resource "aws_iam_user_policy" "ecr_user_policy" {
  name   = "policy-${aws_iam_user.ecr_user.name}"
  user   = aws_iam_user.ecr_user.name
  policy = templatefile("../templates/ecr-user-policy.json", {
    ecr_arn = aws_ecr_repository.this.arn
  })
}
