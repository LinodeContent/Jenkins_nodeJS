pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''docker build -t nodeapp .
'''
      }
    }
    stage('Run') {
      parallel {
        stage('Run') {
          steps {
            sh 'docker run -p 9000:9000 nodeapp'
          }
        }
        stage('Test') {
          steps {
            sh 'mocha'
          }
        }
      }
    }
  }
}