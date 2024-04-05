pipeline {
    agent any
    
    // Define tools to be used in this Pipeline
    tools {
        // Define the NodeJS tool by specifying the full path to the Node.js executable
        nodejs 'jenks' // Replace 'Path/To/Node.js/Executable' with the actual path
    }
    
    stages {
        stage('Build') {
            steps {
                // Use 'npm' command from the specified Node.js installation
                script {
                    // Retrieve the installation directory of Node.js
                    def nodejsHome = tool 'nodejs'
                    
                    // Update the PATH environment variable to include the bin directory of Node.js
                    env.PATH = "${nodejsHome}/bin:${env.PATH}"
                    
                    // Run the 'npm install' command
                    sh 'npm install'
                }
            }
        }
    }
}
