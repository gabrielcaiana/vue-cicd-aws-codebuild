# Vue.js Application Deployment with GitHub Actions and AWS Codebuild

Deploying a Vue.js application with Continuous Integration (CI) using GitHub Actions and Continuous Deployment (CD) using AWS CodeBuild.

## Overview

This project demonstrates an automated pipeline for building, testing, and deploying a Vue.js application using modern CI/CD practices.

- CI: GitHub Actions
- CD: AWS CodeBuild

## Requirements

- Node.js (version X.X.X)
- Vue CLI (optional, if using Vue CLI project)
- AWS Account
- GitHub Account
- AWS CLI configured locally (optional, for local tests)

## Workflow

1. Code pushed to GitHub triggers GitHub Actions for:
   - Linting
   - Unit tests
   - Building the application

2. Upon success, CodeBuild handles the deployment process on AWS.