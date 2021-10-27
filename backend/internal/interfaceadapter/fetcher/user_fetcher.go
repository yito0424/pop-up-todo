package fetcher

import (
	"context"

	"github.com/yito0424/pop-up-todo/backend/internal/domain"
)

type UserFetcher interface{
	CreateUser(c context.Context, user *domain.User) (*domain.User, error)
}