package main

import "github.com/yito0424/pop-up-todo/backend/internal/app/di"

func main() {
	s, cleanup := di.InitializeServer()
	defer cleanup()
	s.Run()
}