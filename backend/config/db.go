package config

import (
    "log"
    "elbarra_nursery/backend/models"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
    dsn := "root:passwordku@tcp(127.0.0.1:3306)/elbarra_nursery?charset=utf8mb4&parseTime=True&loc=Local"

    var err error
    DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Gagal koneksi ke database:", err)
    }

    // 🔥 MIGRATE TABLE USER (WAJIB)
    DB.AutoMigrate(&models.User{})

    log.Println("Database connected!")
}
