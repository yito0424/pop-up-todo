package configs

type Config struct{
	JWTSecretKey string `envconfig:"jwt_secret_key" required:"true"`
	DBHost string `envconfig:"db_host" required:"true"`
	DBPort string `envconfig:"db_port" required:"true"`
	DBUser string `envconfig:"db_user" required:"true"`
	DBPassword string `envconfig:"db_password" required:"true"`
	DBName string `envconfig:"db_name" required:"true"`
}