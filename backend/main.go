package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"elbarra_nursery/backend/config"
	"elbarra_nursery/backend/routes"
)

func main() {
	// Load file .env
	err := godotenv.Load()
	if err != nil {
		log.Println("⚠️  .env file not found, using system environment variables")
	}

	config.ConnectDatabase()

	r := gin.Default()

	routes.AuthRoutes(r)

	r.Run(":8080")
}
