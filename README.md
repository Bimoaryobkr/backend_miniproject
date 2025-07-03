# Backend API Pengguna

Ini adalah REST API sederhana untuk manajemen pengguna yang dibangun dengan Node.js, Express, dan MySQL.

---

## Instalasi

**Install semua dependensi yang dibutuhkan:**
`npm install`

---

## Konfigurasi `.env`

Buat file baru bernama `.env` di dalam folder root proyek Anda dan salin konten di bawah ini. Ganti nilainya sesuai dengan konfigurasi lokal Anda.

```env
# Konfigurasi Database MySQL

NAME_HOST=localhost
NAME_USER=root
NAME_PASSWORD=password_database
NAME_DATABASE=nama_database
NAME_PORT=port_database

# Konfigurasi JWT
JWT_SECRET=string_yang_sulit_ditebak
```

## Cara Menjalankan Aplikasi

`node index.js`
