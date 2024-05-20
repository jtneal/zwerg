################################################################################
# VPC
################################################################################

resource "aws_vpc" "this" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "${var.name}-vpc"
  }
}

################################################################################
# Public Subnets
################################################################################

resource "aws_subnet" "this_public_a" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-2a"

  tags = {
    Name = "${var.name}-vpc-subnet-public-a"
  }
}

resource "aws_subnet" "this_public_b" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-2b"

  tags = {
    Name = "${var.name}-vpc-subnet-public-b"
  }
}

resource "aws_subnet" "this_public_c" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.3.0/24"
  availability_zone = "us-east-2c"

  tags = {
    Name = "${var.name}-vpc-subnet-public-c"
  }
}

################################################################################
# Private Subnets
################################################################################

resource "aws_subnet" "this_private_a" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.4.0/24"
  availability_zone = "us-east-2a"

  tags = {
    Name = "${var.name}-vpc-subnet-private-a"
  }
}

resource "aws_subnet" "this_private_b" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.5.0/24"
  availability_zone = "us-east-2b"

  tags = {
    Name = "${var.name}-vpc-subnet-private-b"
  }
}

resource "aws_subnet" "this_private_c" {
  vpc_id     = aws_vpc.this.id
  cidr_block = "10.0.6.0/24"
  availability_zone = "us-east-2c"

  tags = {
    Name = "${var.name}-vpc-subnet-private-c"
  }
}

################################################################################
# Internet Gateway
################################################################################

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id

  tags = {
    Name = "${var.name}-vpc-igw"
  }
}

################################################################################
# Route Table
################################################################################

resource "aws_route_table" "this" {
  vpc_id = aws_vpc.this.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.this.id
  }

  tags = {
    Name = "${var.name}-vpc-rt"
  }
}

resource "aws_route_table_association" "this_assoc_a" {
  subnet_id      = aws_subnet.this_public_a.id
  route_table_id = aws_route_table.this.id
}

resource "aws_route_table_association" "this_assoc_b" {
  subnet_id      = aws_subnet.this_public_b.id
  route_table_id = aws_route_table.this.id
}

resource "aws_route_table_association" "this_assoc_c" {
  subnet_id      = aws_subnet.this_public_c.id
  route_table_id = aws_route_table.this.id
}
