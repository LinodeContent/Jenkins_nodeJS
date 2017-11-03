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
          node ./node_modules/mocha/bin/mocha
          forever stopall
          junit 'jenkins-test-results.xml'
          '''			   
      }

    }
   
  }
}
