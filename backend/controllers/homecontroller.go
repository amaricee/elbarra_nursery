package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func HomePage(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Selamat datang di Elbarra Nursery API",
		"status":  "success",
		"version": "1.0.0",
	})
}
