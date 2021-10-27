package controller

import (
	"fmt"
	"log"
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

type userResponseJson struct{
	ID uint32 `json:"id"`
	Name string `json:"name"`
	Token string `json:"token"`
}

func (userController *userController) SignUp(c echo.Context) error{
	user := new(domain.User)
	if err := c.Bind(user); err != nil{
		log.Println(fmt.Errorf("calling c.Bind at userController: %w", err))
		return echo.NewHTTPError(http.StatusBadRequest, "request data is invalid")
	}
	if err := c.Validate(user); err != nil{
		log.Println(fmt.Errorf("calling c.Validate at userController: %w", err))
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}
	
	saved_user, token, err := userController.userUsecase.SignUp(c.Request().Context(), user)
	if err != nil{
		log.Println(fmt.Errorf("calling userController.userUsecase.SignUp: %w", err))
		return echo.NewHTTPError(http.StatusInternalServerError, "failed to create user")
	}
	response := userResponseJson{
		ID: saved_user.ID,
		Name: saved_user.Name,
		Token: token.ToString,
	}
	c.JSON(http.StatusOK, response)
	return nil
}