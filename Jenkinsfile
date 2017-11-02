pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh '''node ./node_modules/mocha/bin/mocha
'''
      }
    }
  }
}