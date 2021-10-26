FROM golang:1.17.0-alpine

RUN apk update && apk add git

RUN mkdir /go/src/app

WORKDIR /go/src/app

# go get時のexec: "gcc": executable file not found in $PATHエラーへの対処
ENV CGO_ENABLED 0

COPY . .

# 不要かもしれない（vendorディレクトリがないので）
RUN go mod vendor

RUN chmod +x scripts/goinstall.sh

ENTRYPOINT [ "scripts/goinstall.sh" ]