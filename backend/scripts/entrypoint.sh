#!/bin/sh

go get github.com/google/wire/cmd/wire

go get github.com/rubenv/sql-migrate/...

wire internal/app/di/wire.go

go mod tidy

sql-migrate up

exec "$@"