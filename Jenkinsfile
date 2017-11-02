pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh '''forever start --minUptime 100000 --spinSleepTime 100000 app.js



'''
        sh '''node ./node_modules/mocha/bin/mocha
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