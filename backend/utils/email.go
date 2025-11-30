package utils

import (
	"fmt"
	"net/smtp"
)

func SendVerificationEmail(to, code string) error {
	from := "405f1be9537980"      // ganti dengan username Mailtrap
	pass := "a36a62cafefaa3"      // ganti dengan password Mailtrap

	host := "sandbox.smtp.mailtrap.io"
	port := "587"
	addr := host + ":" + port

	subject := "Email Verifikasi Akun"
	body := "Kode verifikasi Anda: " + code

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: " + subject + "\n\n" +
		body

	auth := smtp.PlainAuth("", from, pass, host)

	err := smtp.SendMail(addr, auth, from, []string{to}, []byte(msg))
	if err != nil {
		fmt.Println("Gagal kirim email:", err)
		return err
	}

	fmt.Println("Email verifikasi berhasil dikirim!")
	return nil
}
