
pipeline {
    agent any

    tools {
        nodejs 'NodeJs'
    }

    environment {
        DOCKER_IMAGE = 'piyushgarg949/k8s-student-app'
    }

    stages {

        stage('Run Unit Tests') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry(
                        'https://registry.hub.docker.com',
                        'dockerhub-creds'
                    ) {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withCredentials([
                        file(
                            credentialsId: 'kubeconfig-student-cluster',
                            variable: 'KUBECONFIG'
                        )
                    ]) {
                        sh 'kubectl apply -f k8s/deploy.yaml'
                        sh 'kubectl apply -f k8s/service.yaml'
                    }
                }
            }
        }
    }
}
