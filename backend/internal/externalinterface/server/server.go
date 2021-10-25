package server

import(
	"github.com/labstack/echo"
	"net/http"
)

type server struct {
	echoImplement *echo.Echo
}

type Server interface {
	Run()
}

func NewServer() Server {
	return &server{
		echoImplement: echo.New(),
	}
}

func sayHello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func (server *server) Run() {
	server.echoImplement.GET("/hello", sayHello)
	server.echoImplement.Start(":8080")
}