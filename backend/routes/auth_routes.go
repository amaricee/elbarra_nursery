package routes

import (
    "elbarra_nursery/backend/controllers"
    "github.com/gin-gonic/gin"
)

func AuthRoutes(r *gin.Engine) {
    r.POST("/register", controllers.Register)
    r.POST("/verify", controllers.Verify)
}
