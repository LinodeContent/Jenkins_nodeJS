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
      steps {
        sh 'docker run -p 9000:9000 nodeapp'
      }
    }
  }
}