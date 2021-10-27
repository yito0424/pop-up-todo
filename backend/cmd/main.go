package main

import (
	"fmt"
	"log"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"github.com/yito0424/pop-up-todo/backend/internal/app/di"
	"github.com/yito0424/pop-up-todo/backend/configs"
)

func main() {
	err := godotenv.Load(".envfile")
	if err != nil{
		log.Fatal(fmt.Errorf("failed to load environmental variables: %w", err))
	}
	var config configs.Config
	if err = envconfig.Process("app", &config); err != nil{
		log.Fatal(err.Error())
	}

	s, cleanup := di.InitializeServer(config)
	defer cleanup()
	s.Run()
}