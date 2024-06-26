pipeline {
    agent any

    stages {
        stage('Checkout') {
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
