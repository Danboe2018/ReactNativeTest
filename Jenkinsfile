pipeline {
    agent {
        label 'android'
    }
    stages {
        stage('Emulator') {
            steps { 
                echo 'Emulator Starting..'
                sh '/Users/builder/Library/Android/sdk/emulator/emulator -avd Pixel3 &'
            }
        }
        stage('Build Android') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building..'
                    sh 'npm install'
                    sh 'react-native run-android --verbose'
                }
            }
        }
        stage('Build iOS') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building..'
                    sh 'npm install'
                    sh 'react-native run-ios --verbose'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                archiveArtifacts '**/*.apk'
            }
        }
    }
}
