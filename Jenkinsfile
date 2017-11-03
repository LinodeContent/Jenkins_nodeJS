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
        sh '''forever start --minUptime 1000 --spinSleepTime 1000 app.js
        forever stopall
          '''
        sh '''MOCHA_FILE=./jenkins-test-results.xml ./node_modules/.bin/mocha tests/** --reporter mocha-junit-reporter
        '''
      }
    }
    stage('Deploy') {
      steps {
        
        junit 'jenkins-test-results.xml'
      }
    }
  }
}