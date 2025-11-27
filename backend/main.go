package main

import (
	"backend/controllers"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Route Home
	r.GET("/", controllers.HomePage)

	r.Run(":8080") // backend akan berjalan di localhost:8080
}
