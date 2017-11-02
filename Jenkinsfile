pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'forever start --minUptime 100000 --spinSleepTime 100000 app.js'
      }
    }
  }
}