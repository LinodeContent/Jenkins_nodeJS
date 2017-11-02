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
          sh '''forever start --minUptime 100000 --spinSleepTime 100000 app.js
                node ./node_modules/mocha/bin/mocha
                node ./node_modules/mocha/bin/mocha test --reporter mocha-junit-reporter
				forever stop
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
