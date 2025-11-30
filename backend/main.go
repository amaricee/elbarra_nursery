package main

import (
    "elbarra_nursery/backend/config"
    "elbarra_nursery/backend/routes"
    "github.com/gin-gonic/gin"
)

func main() {
    config.ConnectDatabase()

    r := gin.Default()

    routes.AuthRoutes(r)

    r.Run(":8080")
}
