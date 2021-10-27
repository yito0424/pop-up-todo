package usecase

import (
	"context"
	"fmt"

	"github.com/yito0424/pop-up-todo/backend/internal/domain"
	"github.com/yito0424/pop-up-todo/backend/configs"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/repository"
	"github.com/yito0424/pop-up-todo/backend/internal/usecase/handler"
)

type userUsecase struct{
	userRepository repository.UserRepository
	config configs.Config
}

type UserUsecase interface{
	SignUp(c context.Context, user *domain.User) (*domain.User, *jwt.Token,  error)
}

func NewUserUsecase(userRepository repository.UserRepository, config configs.Config) UserUsecase{
	return &userUsecase{
		userRepository,
		config,
	}
}

func (userUsecase *userUsecase) SignUp(c context.Context, user *domain.User) (*domain.User, *jwt.Token, error){
	saved_user, err := userUsecase.userRepository.Create(c, user)
	if err != nil{
		return nil, nil, fmt.Errorf("calling userUsecase.userRepository.Create: %w", err)
	}
	token, err := jwt.GenerateToken(saved_user, userUsecase.config.JWTSecretKey)
	if err != nil{
		return nil, nil, fmt.Errorf("calling jwt.GenerateToken at userUsecase: %w", err)
	}
	return saved_user, token, nil
}