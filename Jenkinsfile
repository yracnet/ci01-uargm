pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'Node20', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                sh 'rm -rf'
            }
        }

        stage('Checkout Project') {
            steps {
                git branch: 'jenkins', url: 'https://github.com/yracnet/ci01-uargm.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'yarn test'
            }
        }
    }
}
