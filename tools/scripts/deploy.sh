#!/usr/bin/env bash
set -e

ENV=$1

if [ -z "$ENV" ]; then
  echo "Usage: $0 <ENV>"
  exit 1
fi

# Using this script requires you to first run aws configure sso and login
# You must also update your default profile in ~/.aws/credentials for terraform

VERSION=$(git rev-parse --short HEAD)
REPO="211125431372.dkr.ecr.us-east-2.amazonaws.com"
IMAGE="${REPO}/${ENV}-100002-zwerg-ecr:zwerg-${VERSION}"

# Build image
docker build -t ${IMAGE} .

# Login to ECR
aws ecr get-login-password --region us-east-2 --profile AdministratorAccess-211125431372 | docker login --username AWS --password-stdin ${REPO}

# Push image
docker push ${IMAGE}

# Update Task Definition
cat iac/${ENV}/main.tf
sed -i "s/\"zwerg-[0-9a-f]*\"/\"zwerg-${VERSION}\"/" iac/${ENV}/main.tf
cat iac/${ENV}/main.tf

# Deploy
cd iac/${ENV} && terraform apply

echo "Deployment completed successfully:"
echo "    Docker Image: ${IMAGE}"
echo "    Environment: ${ENV}"
echo "    Version: ${VERSION}"
