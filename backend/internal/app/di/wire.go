//go:build wireinject
// +build wireinject

package di

import (
	"github.com/yito0424/pop-up-todo/backend/internal/externalinterface/server"
	"github.com/google/wire"
)

func InitializeServer() (server.Server, func()) {
	panic(
		wire.Build(server.NewServer),
	)
}