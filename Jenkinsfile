pipeline {
    agent {
        label 'android'
    }
    stages {
        stage("Clean"){
            steps {
                echo 'Cleaning...'
                sh 'cd android ; ./gradlew clean'
                sh 'cd android ; ./gradlew lintFix'
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
