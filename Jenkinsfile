pipeline {
    agent {
        label 'android'
    }
    options {
        timeout(time: 10, unit: 'MINUTES') 
    }
    stages {
        stage("Clean"){
            steps {
                echo 'Cleaning...'
                sh 'cd android ; ./gradlew clean'
                sh 'rm -rf node_modules'
                sh 'yarn cache clean'
            }
        }
        stage("Project Install") {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build Android') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building Android..'
                    sh 'npm install'
                    sh 'react-native run-android --verbose'
                }
            }
        }
        stage('Build iOS') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building iOS..'
                    sh 'npm install'
                    sh 'cd ios ; pod install'
                    sh 'react-native run-ios --verbose'
                }
            }
        }
        stage('Stopping React Native'){
            step {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Stopping React Native..'
                    sh 'killall node'
                    sh 'watchman watch-del-all'
                    sh 'rm -rf node_modules' 
                    sh 'run yarn install'
                    sh 'yarn start --reset-cache'
                    sh 'rm -rf /tmp/metro-*'
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
