pipeline {
	agent node:4.8.5-alpine
        stages {
            stage('Build') {
                steps {
                    sh '''
                    echo "This is your building Block"
                    node -v
                    npm i --save express
					npm i --save-dev supertest should mocha mocha-junit-reporter
					
                    '''
                }
            }
            stage('Test') {
                steps {
                    sh '''
                    echo "This is your testing Block"
                    mocha test --reporter mocha-junit-reporter
                    '''
                }
            }
            stage('Deploy') {
                environment {
                    TWINE_USERNAME = 'your_username'
                    TWINE_PASSWORD = 'your_password'
                }
                steps {
                    sh '''
                    echo "This is your deployment Block"
                    
                    '''
                }
            }
        }
        post {
            always {
                echo 'Actions here will always happen.'
                cleanWs()

            }

            success {
                echo 'If you see this is because we succeed'

            }

            unstable {
                echo 'Sorry, I am unstable :/'

            }

            failure {
                echo 'You have to try again, because Pipeline failed :('

            }

            changed {
                echo 'Things were different before...'

            }

        }
    }
