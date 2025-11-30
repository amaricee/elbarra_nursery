package main

import (
	"log"
	"time"

	"github.com/gin-contrib/cors"
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

	// === Tambahkan CORS middleware ===
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // frontend origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Route auth
	routes.AuthRoutes(r)

	r.Run(":8080")
}
