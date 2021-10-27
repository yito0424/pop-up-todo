package db

import (
	"bytes"
	"context"
	"fmt"
	"log"
	"os"
	"text/template"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/yito0424/pop-up-todo/backend/configs"
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

type FieldsToReplace struct{
	User string
	Password string
	Host string
	Port string
	DBName string
}

func NewSqlHandler(config configs.Config) *SqlHandler {
	var url bytes.Buffer

	url_tmp, err := template.New("").Parse("{{.User}}:{{.Password}}@tcp({{.Host}}:{{.Port}})/{{.DBName}}?parseTime=true")
	replace_to := FieldsToReplace{
		User: config.DBUser,
		Password: config.DBPassword,
		Host: config.DBHost,
		Port: config.DBPort,
		DBName: config.DBName,
	}
	if err = url_tmp.Execute(&url, replace_to); err != nil{
		log.Fatal(fmt.Errorf("failed to generate database url: %w", err))
	}


	db, err := gorm.Open(mysql.Open(url.String()), &gorm.Config{})
	if err != nil {
		log.Fatal(fmt.Errorf("failed to connect database: %w", err))
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