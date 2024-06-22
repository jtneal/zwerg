terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.49.0"
    }
  }

  backend "s3" {
    bucket = "zwerg-terraform-state"
    key    = "beta"
    region = "us-east-2"
  }
}

provider "aws" {
  profile = "default"
  region  = "us-east-2"

  default_tags {
    tags = {
      AppID       = "100002"
      Environment = "beta"
      Owner       = "jason@necosoftwaresolutions.com"
      Project     = "Neco Software Solutions"
    }
  }
}

module "vpc" {
  source = "../modules/vpc"
  name   = "beta-100002-zwerg"
}

module "ecr" {
  source = "../modules/ecr"
  name   = "beta-100002-zwerg"
}

module "security" {
  source = "../modules/security"
  name   = "beta-100002-zwerg"
  vpc_id = module.vpc.vpc_id
}

module "lb" {
  source            = "../modules/lb"
  name              = "beta-100002-zwerg"
  vpc_id            = module.vpc.vpc_id
  public_subnet_ids = module.vpc.public_subnet_ids
  security_group_id = module.security.alb_security_group_id
  domain            = "beta.iiizwerg.com"
}

module "ecs" {
  source            = "../modules/ecs"
  name              = "beta-100002-zwerg"
  short_name        = "zwerg"
  public_subnet_ids = module.vpc.public_subnet_ids
  target_group_arn  = module.lb.target_group_arn
  security_group_id = module.security.ecs_security_group_id
  ecr_arn           = module.ecr.ecr_arn
  ecr_url           = module.ecr.ecr_url
  app_version       = "zwerg-3fcd835"
}
