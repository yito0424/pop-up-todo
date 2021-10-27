package domain

type User struct{
	ID uint32 `gorm:"column:id"`
	Name  string `json:"name" validate:"required,max=10"`
	Password string `json:"password" validate:"min=8,max=15"`
}