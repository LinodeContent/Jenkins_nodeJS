pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''
					npm install
          '''
      }
      post {
        success {
          archiveArtifacts 'target/*.hpi, target/*.jpi'
        }
      }
    }
    stage('Test') {
      steps {
        sh '''
          forever start --minUptime 1000 --spinSleepTime 1000 app.js
          '''			   
      }
      post {
        always {
          sh '''
          junit 'jenkins-test-results.xml'
          forever stopall
          '''
        }
      }
    }
   
  }
}
