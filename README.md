# Project Backend

Back end is made using Node.js, it uses environment variable `Name`.

Dockerfile present in the folder is used to create docker image using this command

`docker build -t back_end_image_1 .`

now the docker image can be seen using

`docker images`

Container is created using following command for above created image. We are overriding environment variable using `--env Name=foo`

`docker run -p 9000:9000 -d --env Name=foo -i --name container_back_end back_end_image_1`

docker containers can be viewed using

`docker container ls`

Kubernetes folder contains `deployment.yaml` which provides deployment configuration to run our web server on Kubernetes.

As there are no local images present, we built the image directly inside the Minikube container. using

`minikube image build -t back_end_image_1 .`

we apply deployment.yaml using

`kubectl apply -f deployment.yaml`

now at the end we port forward our local port 9000 to the 9000 of the Deployment by using

`kubectl port-forward deployment/backEnd 9000:9000`
