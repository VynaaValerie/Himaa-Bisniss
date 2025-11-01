 README.md
markdown
# Website HIMABIS - Himpunan Mahasiswa Bisnis

Website resmi Himpunan Mahasiswa Bisnis dengan desain modern dan mudah dikustomisasi.

## 🚀 Cara Deploy di Vercel

1. **Buat akun Vercel** di [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (opsional):
   ```bash
   npm i -g vercel
Deploy:

Upload folder ini ke GitHub

Import project di Vercel dari GitHub

Atau drag & drop folder ke Vercel dashboard

📁 Struktur Project
text
/himabis-website/
├── public/
│   ├── index.html          # File HTML utama
│   ├── style.css           # Stylesheet
│   ├── script.js           # JavaScript logic
│   ├── config.js           # Konfigurasi website (EDIT FILE INI!)
│   └── assets/             # Folder untuk gambar & file static
├── server.js               # Server untuk Vercel
├── vercel.json             # Konfigurasi Vercel
├── package.json            # Dependencies
└── README.md              # Dokumentasi
⚙️ Cara Edit Website
1. Edit Data Organisasi
Buka file public/config.js dan edit bagian:

javascript
ORGANIZATION: {
    NAME: "HIMABIS",
    FULL_NAME: "Himpunan Mahasiswa Bisnis",
    TAGLINE: "Membangun Pemimpin Bisnis Masa Depan",
    DESCRIPTION: "Deskripsi organisasi...",
    YEAR_ESTABLISHED: 2018,
    EXPERIENCE_YEARS: 5
}
2. Edit Data Pengurus
javascript
PENGURUS: [
    {
        name: "Nama Pengurus",
        position: "Jabatan",
        photo: "url_foto.jpg",
        social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#"
        }
    }
]
3. Edit Kegiatan
javascript
KEGIATAN: [
    {
        title: "Nama Kegiatan",
        description: "Deskripsi kegiatan...",
        image: "url_gambar.jpg",
        date: "Tanggal Kegiatan"
    }
]
4. Edit Kontak & Media Sosial
javascript
CONTACT: {
    ADDRESS: "Alamat lengkap",
    EMAIL: "email@domain.com",
    PHONE: "+62 812 3456 7890",
    SOCIAL_MEDIA: {
        instagram: "https://instagram.com/username",
        // ... lainnya
    }
}
5. Edit Warna Tema
javascript
THEME: {
    PRIMARY: "#2563eb",
    SECONDARY: "#7c3aed",
    // ... warna lainnya
}
🎨 Fitur
✅ Responsive design

✅ Easy configuration

✅ Modern animations

✅ Contact form

✅ Image slider

✅ Social media integration

✅ SEO optimized

📱 Sections
Header - Navigation dengan logo

Hero - Introduksi & statistik

About - Visi & misi organisasi

Pengurus - Struktur kepengurusan

Kegiatan - Gallery kegiatan

Kontak - Form kontak & informasi

Footer - Links & copyright

🔧 Development
Jalankan secara lokal:

bash
npm install
npm run dev
Website akan berjalan di http://localhost:3000

👨‍💻 Developer
Vynaa Valerie
Website ini dibuat dengan ❤️ untuk HIMABIS

© 2023 HIMABIS - Himpunan Mahasiswa Bisnis. All rights reserved.

text

## Cara Menggunakan:

1. **Download semua file** di atas
2. **Edit file `public/config.js`** sesuai kebutuhan organisasi Anda
3. **Deploy ke Vercel** dengan mengupload folder ke GitHub dan import ke Vercel
4. **Atau jalankan lokal** dengan `npm install && npm run dev`

Website sudah siap dengan semua fitur yang diminta:
- ✅ Bisa deploy di Vercel
- ✅ Mudah edit melalui config.js
- ✅ Responsif di semua device
- ✅ Animasi modern
- ✅ Sidebar mobile dengan close button
- ✅ Layout yang optimal

Semua konten bisa diubah dengan mudah melalui file `config.js` tanpa perlu mengedit HTML/CSS/JavaScript!
