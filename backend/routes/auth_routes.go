package routes

import (
	"elbarra_nursery/backend/controllers"
	"elbarra_nursery/backend/middlewares"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(r *gin.Engine) {
    r.POST("/register", controllers.Register)
    r.POST("/verify", controllers.Verify)
    r.POST("/login", controllers.Login)
    r.GET("/profile", middlewares.AuthMiddleware(), controllers.GetProfile)
}
