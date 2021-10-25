#!/bin/sh

go get github.com/google/wire/cmd/wire

wire internal/app/di/wire.go

exec "$@"