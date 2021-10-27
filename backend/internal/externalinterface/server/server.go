package server

import(
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"net/http"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/controller"	
	"github.com/go-playground/validator/v10"
)

type server struct {
	echoImplement *echo.Echo
	userController controller.UserController
}

type Server interface {
	Run()
}

func NewServer(userController controller.UserController) Server {
	return &server{
		echoImplement: echo.New(),
		userController: userController,
	}
}

func sayHello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

type CustomValidator struct {
    validator *validator.Validate
}

func (customValidator *CustomValidator) Validate(i interface{}) error {
	err := customValidator.validator.Struct(i)
	return err
}

func (server *server) Run() {
	server.echoImplement.Validator = &CustomValidator{validator: validator.New()}
	server.echoImplement.Use(middleware.CORS())
	server.echoImplement.POST("/user/new", server.userController.SignUp)
	server.echoImplement.GET("/hello", sayHello)
	server.echoImplement.Start(":8080")
}