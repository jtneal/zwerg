variable "name" {
  type = string
}

variable "short_name" {
  type = string
}

variable "public_subnet_ids" {
  type = list(string)
}

variable "target_group_arn" {
  type = string
}

variable "security_group_id" {
  type = string
}

variable "ecr_arn" {
  type = string
}

variable "ecr_url" {
  type = string
}

variable "app_version" {
  type = string
}
