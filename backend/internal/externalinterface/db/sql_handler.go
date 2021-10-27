package db

import (
	"context"
	"fmt"
	"os"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/yito0424/pop-up-todo/backend/internal/domain"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type SqlHandler struct {
	*gorm.DB
}

type Test struct {
	gorm.Model
	Name string
	Password string  
}

func NewSqlHandler() *SqlHandler {
	dsn := "root:password@tcp(db:3306)/app_dev?parseTime=true"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	err = db.AutoMigrate(&Test{})
	db.Migrator().CreateTable(&Test{})
	if err != nil {
		panic("failed to")
	}

	fmt.Fprintln(os.Stdout,"Hello World!")

	sqlHandler := &SqlHandler{
		db,
	}

	return sqlHandler
}

func (sqlHandler *SqlHandler) CreateUser(c context.Context, user *domain.User) (*domain.User, error){
	result := sqlHandler.Create(user)
	fmt.Printf("%#v", user)
	if result.Error != nil{
		return nil, fmt.Errorf("calling sqlHandler.createUser: %w", result.Error)
	}
	return user, nil
}