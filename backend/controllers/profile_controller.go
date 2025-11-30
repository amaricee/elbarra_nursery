package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"elbarra_nursery/backend/models"
	"elbarra_nursery/backend/config"
)

func GetProfile(c *gin.Context) {
	// Ambil user_id dari middleware
	userId := c.MustGet("user_id")

	var user models.User

	// Query DB berdasarkan user_id
	if err := config.DB.First(&user, userId).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User tidak ditemukan",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Data profile ditemukan",
		"user": gin.H{
			"id":       user.ID,
			"email":    user.Email,
			"username": user.Username,
			"verified": user.Verified,
		},
	})
}
