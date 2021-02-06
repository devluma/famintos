#!/bin/bash

docker run -d --restart=unless-stopped --name postgresql -e POSTGRESQL_USERNAME=root -e POSTGRESQL_PASSWORD=secret -e POSTGRESQL_DATABASE=famintos -p 5432:5432 bitnami/postgresql:latest