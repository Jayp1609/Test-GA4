pipeline {
    agent any
    
    // Define tools to be used in this Pipeline
    tools {
        // Define the NodeJS tool called 'nodejs'
        nodejs 'nodejs'
    }
    
    stages {
        stage('Build') {
            steps {
                // Use 'npm' command from the specified Node.js installation
                sh 'npm install'
            }
        }
    }
}
