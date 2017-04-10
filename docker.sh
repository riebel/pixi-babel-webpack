#!/usr/bin/env bash

#stop potentionally running app
docker-compose stop

##build and launch containers
docker-compose build
docker-compose up -d

# setup permissions
docker exec -it example-app mkdir -p /var/www
docker exec example-app chown -R www-data:www-data /var/www

##composer selfupdate
docker exec -it example-app composer selfupdate

##log into the container
docker exec -it --user www-data example-app bash
docker-compose stop