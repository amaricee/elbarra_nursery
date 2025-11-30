package controllers

import (
	"elbarra_nursery/backend/config"
	"elbarra_nursery/backend/models"
	"elbarra_nursery/backend/utils"
	"fmt"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// POST /register
func Register(c *gin.Context) {
	var input struct {
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	// Bind JSON
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Cek apakah email atau username sudah ada
	var existingUser models.User
	if err := config.DB.Where("email = ? OR username = ?", input.Email, input.Username).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email atau username sudah digunakan"})
		return
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal hash password"})
		return
	}

	// Buat user baru
	user := models.User{
		Username: input.Username,
		Email:    input.Email,
		Password: string(hashedPassword),
		Verified: false,
	}

	// Simpan user dulu tanpa kode
	if err := config.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal membuat user"})
		return
	}

	// Generate kode verifikasi 6 digit
	code := fmt.Sprintf("%06d", rand.Intn(1000000))
	user.VerificationCode = code

	// Update kode verifikasi di database
	if err := config.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal simpan kode verifikasi"})
		return
	}

	// Kirim email verifikasi
	if err := utils.SendVerificationEmail(user.Email, code); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengirim email verifikasi"})
		return
	}

	// Response sukses
	c.JSON(http.StatusOK, gin.H{"message": "Registrasi berhasil! Silakan cek email untuk verifikasi."})
}

// POST /login
func Login(c *gin.Context) {
	var input struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	// Bind JSON
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Cari user berdasarkan email
	var user models.User
	if err := config.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Email atau password salah"})
		return
	}

	// Cek password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Email atau password salah"})
		return
	}

	// Cek apakah sudah verifikasi
	if !user.Verified {
		c.JSON(http.StatusForbidden, gin.H{"error": "Akun belum terverifikasi"})
		return
	}

	// Generate JWT
	token, err := config.GenerateToken(uint(user.ID))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal membuat token"})
		return
	}

	// Response sukses (mengirim token)
	c.JSON(http.StatusOK, gin.H{
		"message": "Login berhasil",
		"token":   token,
		"user": gin.H{
			"id":       user.ID,
			"username": user.Username,
			"email":    user.Email,
			"verified": user.Verified,
		},
	})
}


// POST /verify
func Verify(c *gin.Context) {
	var input struct {
		Email string `json:"email"`
		Code  string `json:"code"`
	}

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user models.User
	if err := config.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User tidak ditemukan"})
		return
	}

	// Bandingkan kode verifikasi
	if user.VerificationCode != input.Code {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Kode verifikasi salah"})
		return
	}

	// Update verified
	user.Verified = true
	user.VerificationCode = "" // hapus kode setelah verifikasi
	config.DB.Save(&user)

	c.JSON(http.StatusOK, gin.H{"message": "Akun berhasil diverifikasi!"})
}