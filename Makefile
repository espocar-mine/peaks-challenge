IMAGE_NAME = mappetella/peaks-challenge
PORT = 3001

.PHONY: build run stop clean push

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d -p $(PORT):80 --name peaks-challenge $(IMAGE_NAME)

stop:
	docker stop peaks-challenge || true
	docker rm peaks-challenge || true

clean: stop
	docker rmi $(IMAGE_NAME) || true

push:
	docker push $(IMAGE_NAME)
