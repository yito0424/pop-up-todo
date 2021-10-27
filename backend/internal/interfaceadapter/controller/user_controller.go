package controller

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo"
	"github.com/yito0424/pop-up-todo/backend/internal/domain"
	"github.com/yito0424/pop-up-todo/backend/internal/usecase"
)

type userController struct{
	userUsecase usecase.UserUsecase
}

type UserController interface{
	SignUp(c echo.Context) error
}

func NewUserController(userUsecase usecase.UserUsecase) UserController{
	return &userController{
		userUsecase,
	}
}

func (userController *userController) SignUp(c echo.Context) error{
	user := new(domain.User)
	if err := c.Bind(user); err != nil{
		return fmt.Errorf("calling c.Bind at userController: %w", err)
	}
	if err := c.Validate(user); err != nil{
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}
	
	return userController.userUsecase.SignUp(c.Request().Context(), user)
}