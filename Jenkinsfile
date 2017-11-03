pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
                deleteDir()
                npm install'''
      }
    }
    stage('Test') {
      steps {
        sh '''
            forever start --minUptime 1000 --spinSleepTime 1000 app.js
            forever stopall
            junit 'jenkins-test-results.xml'
            '''
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build -t nodeapp:v1 .'
        
      }
    }
  }
}