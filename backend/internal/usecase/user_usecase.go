package usecase

import (
	"context"
	"fmt"

	"github.com/yito0424/pop-up-todo/backend/internal/domain"
	"github.com/yito0424/pop-up-todo/backend/configs"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/repository"
)

type userUsecase struct{
	userRepository repository.UserRepository
	config configs.Config
}

type UserUsecase interface{
	SignUp(c context.Context, user *domain.User) error
}

func NewUserUsecase(userRepository repository.UserRepository, config configs.Config) UserUsecase{
	return &userUsecase{
		userRepository,
		config,
	}
}

func (userUsecase *userUsecase) SignUp(c context.Context, user *domain.User) error{
	saved_user, err := userUsecase.userRepository.Create(c, user)
	if err != nil{
		return fmt.Errorf("calling userUsecase.userRepository.Create: %w", err)
	}
	fmt.Print(saved_user)
	fmt.Print(userUsecase.config.JWTSecretKey)
	return nil
}