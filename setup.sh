#!/bin/bash

err() {
    echo -e "\n[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@\n" >&2
    exit 1
}

log() {
    echo -e "\n[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@\n"
}

if ! type "docker" > /dev/null 2>&1; then
    err "⛔️ Docker not installed"
fi

if ! type "docker-compose" > /dev/null 2>&1; then
    err "⛔️ Docker-Compose not installed"
fi

log "🍀 docker and docker-compose are installed, everything looks good."

log "🐋 Starting docker-compose stack if not already started.."
docker-compose up --build
if [ $? -ne 0 ]; then
    err "⛔️ Error while starting docker-compose stack."
fi