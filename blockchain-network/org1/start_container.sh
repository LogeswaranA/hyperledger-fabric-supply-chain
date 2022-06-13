#!/bin/bash

chmod u+x ./cli-scripts/*

sleep 1

mkdir -p $PWD/fabric-ca-server

docker-compose -f docker-compose-org1.yaml up -d

sleep 5
docker exec cli-org1 scripts/create-common-network.sh


