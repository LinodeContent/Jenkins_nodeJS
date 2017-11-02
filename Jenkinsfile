pipeline {
  agent none
  stages {
    stage('error') {
      steps {
        sh '''docker build -t nodeapp .
'''
      }
    }
  }
}