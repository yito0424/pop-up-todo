//go:build wireinject
// +build wireinject

package di

import (
	"github.com/yito0424/pop-up-todo/backend/internal/externalinterface/server"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/controller"	
	"github.com/yito0424/pop-up-todo/backend/internal/usecase"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/repository"	
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/fetcher"	
	"github.com/yito0424/pop-up-todo/backend/internal/externalinterface/db"
	"github.com/google/wire"
	"github.com/yito0424/pop-up-todo/backend/configs"
)

func InitializeServer(config configs.Config) (server.Server, func()) {
	panic(
		wire.Build(
			server.NewServer, 
			db.NewSqlHandler,
			controller.NewUserController, 
			usecase.NewUserUsecase, 
			repository.NewUserRepository,
			wire.Bind(new(fetcher.UserFetcher), new(*db.SqlHandler)),
		),
	)
}