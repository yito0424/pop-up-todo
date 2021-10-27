package repository

import (
	"context"
	"fmt"

	"github.com/yito0424/pop-up-todo/backend/internal/domain"
	"github.com/yito0424/pop-up-todo/backend/internal/interfaceadapter/fetcher"
	"golang.org/x/crypto/bcrypt"
)

type userRepository struct{
	userFetcher fetcher.UserFetcher
}

type UserRepository interface{
	Create(c context.Context, user *domain.User) (*domain.User, error)
}

func NewUserRepository(userFetcher fetcher.UserFetcher) UserRepository{
	return &userRepository{
		userFetcher: userFetcher,
	}
}

func (userRepository *userRepository) Create(c context.Context, user *domain.User) (*domain.User, error){
	hashed_password, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	if err != nil{
		return nil, fmt.Errorf("calling bcrypt.GenerateFromPassword at userRepository: %w", err)
	}
	user.Password = string(hashed_password)
	saved_user, err := userRepository.userFetcher.CreateUser(c, user)
	if err != nil{
		return nil, fmt.Errorf("calling userRepository.userFetcher.CreateUser: %w", err)
	}
	saved_user.Password = ""
	return saved_user, nil
}