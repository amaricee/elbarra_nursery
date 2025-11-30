package models

type User struct {
    ID               uint   `json:"id"`
    Username         string `json:"username"`
    Email            string `json:"email"`
    Password         string `json:"password"`
    Verified         bool   `json:"verified"`
    VerificationCode string `json:"verification_code"`
}
