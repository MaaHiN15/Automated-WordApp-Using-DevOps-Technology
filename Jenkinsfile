pipeline{
    agent any
    stages{
        stage("Jenkins permissions"){
            steps{
                sh "sudo chown root:jenkins /run/docker.sock"
            }
        }
        stage("Docker login"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'docker-credential', usernameVariable: 'USER', passwordVariable: 'PASS')]){
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "echo Docker Login succeed"
                }
            }
        }
        // stage('Auto Version Increment') {
        //     steps {
        //         script {
        //             def versionFile = 'version.txt'
        //             def currentVersion = readFile(versionFile).trim()
        //             sh "echo ${currentVersion} > version.txt"
        //             env.DOCKER_IMAGE_TAG = "${currentVersion}-${env.BUILD_ID}"
        //         }
        //     }
        // }
        stage("Docker push"){
            steps {
                script {
                    // sh "sudo docker build -t maahin/maahin-app:${env.DOCKER_IMAGE_TAG} ."
                    // sh "sudo docker push maahin/maahin-app:${env.DOCKER_IMAGE_TAG}"
                    sh "sudo docker build -t maahin/maahin-app:7.0 ."
                    sh "sudo docker push maahin/maahin-app:7.0"
                    sh "echo Image build and Pushed to Repo"
                }
            } 
        }
        stage('Kubernetes Login') {
            steps {
                echo 'Loggin into k8s'
                sh 'minikube status'
                sh 'kubectl get nodes'
            }
        }
        stage("Application deployment"){
            steps{
                script{
                    echo 'Deploying application container'
                    sh 'kubectl apply -f k8s/db.yaml'
                    sh 'kubectl apply -f k8s/view_db.yaml'
                    sh 'kubectl apply -f k8s/app.yaml'
                }
            }
        }
        stage('Application end point') {
            steps {
                sh 'kubectl get svc'
            }
        }
    }
}