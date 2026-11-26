# Continuous Integration and Continuous Deployment (CI/CD)

A complete CI/CD pipeline implementation demonstrating automated testing, containerization, and Kubernetes deployment using industry-standard DevOps tools.

## 🚀 Project Overview

This project showcases a professional CI/CD workflow that automatically builds, tests, and deploys a Node.js application to a Kubernetes cluster whenever code changes are pushed to the repository.

## 🛠️ Technology Stack

- **Application**: Node.js with Express
- **Testing**: Mocha and chai or Supertest
- **Containerization**: Docker
- **Container Registry**: Docker Hub
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins
- **Version Control**: Git

## 📋 Pipeline Workflow

The Jenkins pipeline automatically:
- ✅ Runs unit tests with Mocha/Supertest
- ✅ Builds and pushes Docker images to Docker Hub
- ✅ Deploys the application to Kubernetes cluster

## 🏗️ Architecture

```
Git Repository → Jenkins Pipeline → Docker Build → Docker Hub → Kubernetes Deployment
```

## 🔧 Setup Requirements

### Prerequisites
- Jenkins (installed locally or containerized)
- Docker & Docker Hub account
- Kubernetes cluster (local via Docker Desktop or cloud)
- Node.js & npm

### Kubernetes Setup Options
- **Docker Desktop**: Enable Kubernetes in Docker Desktop settings
- **CLI Tools**: Install kubectl and Helm via package managers:
  ```bash
  # Using Chocolatey
  choco install kubernetes-cli kubernetes-helm
  
  # Using Winget
  winget install Kubernetes.kubectl Helm.Helm
  ```

### Jenkins Configuration
1. Install required plugins: NodeJS, Docker, Kubernetes,Git, Docker, Docker pipeline
2. Configure credentials:
   - Git repository access
   - Docker Hub registry
   - Kubernetes cluster config

### Optional Integrations

#### SonarQube Integration
- Add your SonarQube credentials to Jenkins
- The Jenkinsfile already contains the integration code (currently commented)
- Uncomment the SonarQube stage in the pipeline for code quality analysis

#### Containerized Services with ngrok
For running Jenkins and SonarQube as Docker containers:
- Use the included `ngrok.yaml` configuration
- Exposes both Jenkins and SonarQube services publicly
- Perfect for development and testing environments

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedElaassal/k8s-CI_CD-app.git
   ```

2. **Configure Jenkins Pipeline**
   - Create new pipeline job
   - Point to repository Jenkinsfile
   - Set up required credentials

3. **Trigger Pipeline**
   - Push code changes to trigger automatic deployment
   - Monitor pipeline execution in Jenkins dashboard

## 📁 Project Structure

```
├── app.js                 # Main application
├── package.json          # Dependencies
├── Dockerfile            # Container configuration
├── Jenkinsfile           # CI/CD pipeline
├── ngrok.yaml            # ngrok configuration for containerized services
├── test/
│   └── appTest.js        # Unit tests
└── k8s/
    ├── deploy.yaml       # Kubernetes deployment
    └── service.yaml      # Kubernetes service
```

## 🎯 Key Features

- **Automated Testing**: Unit tests run on every commit
- **Container Security**: Multi-stage Docker builds
- **Scalable Deployment**: Kubernetes orchestration
- **SonarQube Ready**: Code quality integration available
- **Production Ready**: Professional CI/CD practices

## 📊 Monitoring & Observability


### Optional: Grafana & Prometheus Setup
Deploy monitoring stack using Helm:

```bash
# Add Helm repositories
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Install Prometheus and Grafana
helm install prometheus prometheus-community/prometheus
helm install grafana grafana/grafana
```

### Prometheus Metrics
The application exposes Prometheus metrics at `/metrics` endpoint for monitoring.



---

*This project demonstrates modern DevOps practices and can serve as a foundation for production-ready CI/CD implementations.*
# GitHub Webhook Test
