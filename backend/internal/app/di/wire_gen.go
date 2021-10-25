// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package di

import (
	"github.com/yito0424/pop-up-todo/backend/internal/externalinterface/server"
)

// Injectors from wire.go:

func InitializeServer() (server.Server, func()) {
	serverServer := server.NewServer()
	return serverServer, func() {
	}
}