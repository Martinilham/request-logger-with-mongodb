# 🚀 Request Logger with MongoDB
## A simple and powerful Express.js middleware to log HTTP requests directly into MongoDB!
Track IP address, HTTP methods, endpoints, users, and device information — perfect for API monitoring and debugging.

## ✨ Features

✅ Log every HTTP request into MongoDB
✅ Detect real client IP address (even behind proxies)
✅ Log HTTP method & endpoint
✅ Log authenticated user info (req.user)
✅ Parse and log device info using User-Agent

## 📦 Installation
```bash
git clone https://github.com/Martinilham/request-logger-with-mongodb.git
cd request-logger-with-mongodb
npm install
```
## 💾 Sample Log Output
``` json
{
  "ip": "192.168.1.10",
  "method": "GET",
  "endpoint": "/data",
  "user": "pentol",
  "userAgent": "nokia CPH2001 (Android 6) - Chrome 11.0.0.0",
  "createdAt": "2025-04-20T07:00:00Z"
}
```
## ⚡ Dependencies

express — 🌐 Fast and minimal web framework.
mongoose — 💾 MongoDB object modeling for Node.js.
ua-parser-js — 📱 Detect device, OS, and browser from User-Agent.

## 🙌 Terima Kasih!
Terima kasih sudah mengunjungi project ini!
Semoga middleware ini bisa membantu kamu membangun aplikasi yang lebih aman, rapi, dan mendeteksi log yang masuk.

Jangan ragu untuk eksplorasi, kembangkan, dan sesuaikan middleware ini dengan kebutuhan project kamu.

## 📜 Lisensi

Project ini dirilis dengan lisensi [MIT License](./LICENSE).  
Bebas dipakai, dikembangkan, dan dimodifikasi — cukup cantumkan kredit nama pembuat.

![GitHub last commit](https://img.shields.io/github/last-commit/Martinilham/request-logger-with-mongodb)
![GitHub repo size](https://img.shields.io/github/repo-size/Martinilham/request-logger-with-mongodb)
![GitHub license](https://img.shields.io/github/license/Martinilham/request-logger-with-mongodb)