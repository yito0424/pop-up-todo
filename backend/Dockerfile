FROM golang:1.17.0-alpine

RUN apk update && apk add git

RUN mkdir /go/src/app

WORKDIR /go/src/app

COPY . .

RUN go mod vendor

RUN chmod +x scripts/goinstall.sh

ENTRYPOINT [ "scripts/goinstall.sh" ]