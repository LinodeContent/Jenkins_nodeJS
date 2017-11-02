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
                node ./node_modules/mocha/bin/mocha
                node ./node_modules/mocha/bin/mocha test --reporter mocha-junit-reporter
				forever stopall
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
