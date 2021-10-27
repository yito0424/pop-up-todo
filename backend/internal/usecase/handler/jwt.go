package jwt

import (
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/yito0424/pop-up-todo/backend/internal/domain"
)

type jwtCustomClaims struct{
	ID uint32
	Name string
	jwt.StandardClaims
}

type Token struct{
	ToString string
}

func GenerateToken(user *domain.User, secretKey string) (*Token, error){
	claims := &jwtCustomClaims{
		user.ID,
		user.Name,
		jwt.StandardClaims{
			IssuedAt: time.Now().Unix(),
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	encoded_token, err := token.SignedString([]byte(secretKey))
	if err != nil{
		return nil, fmt.Errorf("calling GenerateToken: %w", err)
	}
	return &Token{encoded_token}, nil
}