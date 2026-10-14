# 💖 A Little World Made for Syifa 🎂

Website kejutan ulang tahun ke-22 romantis, personal, dan interaktif yang dibuat dengan penuh cinta khusus untuk **Syifa Syauqina Aushaf** dari calon suaminya, **Firdaus Mohammad**.

---

## 🌟 Fitur Utama Website

1. **Opening Screen Romantis:** Fullscreen pastel pink dengan animasi floating hearts, sambutan manis, dan tombol *Open Your Surprise 💌* yang menyalakan musik instrumental piano.
2. **Main Birthday Greeting:** Ucapan ulang tahun ke-22 dengan badge floral memukau, visualisasi tahun berkah, dan animasi reveal yang lembut.
3. **Personal Birthday Wishes:** 4 kartu doa istimewa (*Health & Happiness*, *Your Dreams*, *Your Future*, dan *Our Future* menuju pernikahan impian).
4. **Our Little Memories (Galeri Foto):** Mendukung 15 foto dengan tata letak scrapbook Polaroid yang estetik, washi tape, kemiringan artistik, lazy loading, dan Lightbox modal interaktif (bisa swipe di HP, tombol Next/Prev, dan Escape).
5. **A Letter From Your Future Husband:** Animasi amplop cinta 3D dengan segel lilin *S&F*, kertas surat tekstur klasik, efek ketikan romantis (*typewriter*), serta tombol *Show Full Letter*.
6. **Birthday Cake Surprise (Klimaks):** Ilustrasi kue ulang tahun 2 tingkat dengan icing, mutiara, lilin berapi menyala, tombol *Blow the Candles ✨*, efek hembusan angin, asap lembut, dan ledakan confetti pastel bertabur hati, plus tombol *Celebrate Again 🔁*.
7. **Final Love Message:** Pesan penutup menyentuh tentang harapan menjadi suami halal, tombol *Replay Our Story*, dan *Back to Our Memories*.
8. **Audio Instrumental Piano:** Musik latar piano romantis yang aman dari pemblokiran autoplay browser, dilengkapi kontrol musik ON/OFF mengambang dengan visualizer.

---

## 📂 Struktur File

```
d:/ultah/
├── index.html                 # Struktur utama halaman web (HTML5 Semantik)
├── style.css                  # Desain visual romantis, animasi, dan responsif HP
├── script.js                  # Logika interaktif, galeri foto, surat, lilin, confetti, audio
├── README.md                  # Panduan lengkap penggunaan
├── images/                    # Folder 15 foto kenangan
│   ├── foto1.jpg
│   ├── foto2.jpg
│   ├── ...
│   └── foto15.jpg
└── assets/                    # Folder musik latar
    ├── piano-romantic.mp3
    └── piano-romantic.wav
```

---

## 🚀 1. Cara Menjalankan Website di Komputer / Laptop

Ada beberapa cara mudah untuk menjalankan website ini secara lokal:

### Cara A: Menggunakan VS Code (Live Server)
1. Buka folder `d:/ultah` di VS Code.
2. Pasang ekstensi **Live Server** (jika belum ada).
3. Klik kanan file `index.html`, lalu pilih **"Open with Live Server"**.
4. Website akan langsung terbuka otomatis di browser Anda.

### Cara B: Menggunakan Python (Tanpa Install Tambahan)
1. Buka Terminal / PowerShell di folder `d:/ultah`.
2. Jalankan perintah:
   ```bash
   python -m http.server 3000
   ```
3. Buka browser dan ketik alamat:
   ```
   http://localhost:3000
   ```

### Cara C: Menggunakan Node.js / npx
1. Jalankan perintah di terminal:
   ```bash
   npx serve .
   ```
2. Buka URL yang ditampilkan di terminal (biasanya `http://localhost:3000`).

---

## 📸 2. Cara Memasukkan 15 Foto Kenangan

Saat ini sudah tersedia **15 placeholder cantik** di dalam folder `images/` sehingga website langsung terlihat estetik tanpa gambar rusak.

Untuk memasukkan foto asli kalian:
1. Siapkan 15 foto terbaik bersama Syifa.
2. Beri nama file secara berurutan:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`
   - ... hingga `foto15.jpg`
3. Salin dan timpa (*replace*) file-file tersebut ke dalam folder:
   ```
   d:/ultah/images/
   ```
4. Refresh browser, foto asli kalian akan otomatis tampil dengan bingkai Polaroid!

> 💡 **Tips:** Format foto yang didukung adalah `.jpg` atau `.jpeg`. Jika foto Anda berekstensi `.png`, ubah atau simpan sebagai `.jpg`.

---

## ✍️ 3. Cara Mengganti Caption dan Tanggal Foto

Semua caption foto tersusun rapi di bagian paling atas file `script.js` pada array `PHOTO_MEMORIES`:

```javascript
const PHOTO_MEMORIES = [
  {
    id: 1,
    filename: 'images/foto1.jpg',
    title: 'Our First Memory',
    caption: 'One of my favorite memories.',
    subcaption: 'Hari di mana senyum manismu bikin hatiku jatuh cinta lagi.'
  },
  // Ubah teks caption dan subcaption sesuai momen kenangan kalian!
];
```

Cukup ubah teks di dalam tanda petik pada `caption` atau `subcaption`, lalu simpan file `script.js`.

---

## 🎵 4. Cara Menambahkan atau Mengganti Musik

Secara bawaan, sudah disediakan instrumen piano romantis yang lembut di `assets/piano-romantic.mp3`.

Jika Anda ingin mengganti dengan lagu favorit berdua:
1. Siapkan file lagu berformat `.mp3` (disarankan versi instrumental piano atau akustik tanpa vokal).
2. Beri nama file: `piano-romantic.mp3`.
3. Masukkan ke dalam folder:
   ```
   d:/ultah/assets/piano-romantic.mp3
   ```
4. Website akan langsung memutar lagu pilihan Anda saat Syifa menekan tombol *Open Your Surprise 💌*.

---

## 📱 5. Cara Menguji Website di HP Anda (Sebelum Dikirim ke Syifa)

1. Pastikan laptop dan HP Anda terhubung ke jaringan **WiFi yang sama** (atau hotspot HP).
2. Cari tahu IP Laptop Anda. Di PowerShell ketik:
   ```powershell
   ipconfig
   ```
   Lihat baris `IPv4 Address`, contohnya: `192.168.1.15`.
3. Jalankan server lokal di laptop:
   ```bash
   python -m http.server 3000
   ```
4. Buka browser Chrome di HP Anda, lalu ketik alamat IP tadi beserta port 3000:
   ```
   http://192.168.1.15:3000
   ```
5. Website sudah bisa langsung dicoba dengan sentuhan jari di layar HP!

---

## 🌐 6. Cara Mengunggah Website ke Hosting Gratis (Agar Syifa Bisa Membuka Lewat Link)

Agar Syifa bisa membuka website ini di mana saja melalui link internet, gunakan salah satu hosting gratis & cepat berikut:

### Pilihan 1: Vercel (Sangat Mudah & Direkomendasikan)
1. Buat akun gratis di [vercel.com](https://vercel.com).
2. Unduh tool Vercel di terminal atau pasang Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Di terminal folder `d:/ultah`, cukup ketik:
   ```bash
   vercel
   ```
4. Tekan Enter untuk menyetujui pengaturan standar.
5. Dalam beberapa detik Anda akan mendapatkan link gratis (contoh: `https://a-little-world-for-syifa.vercel.app`) yang siap dikirimkan kepada Syifa!

### Pilihan 2: Netlify Drop (Tanpa Koding & Tanpa Terminal)
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
2. Tarik dan lepas (*drag & drop*) seluruh folder `d:/ultah` ke area upload di browser.
3. Tunggu beberapa detik, Netlify akan langsung membuatkan website online beserta link publiknya!

### Pilihan 3: GitHub Pages
1. Buat repository baru di GitHub (misal: `syifa-22nd-birthday`).
2. Upload semua file (`index.html`, `style.css`, `script.js`, folder `images/`, dan `assets/`).
3. Masuk ke **Settings** > **Pages** > pilih branch `main` > **Save**.
4. Website akan live di alamat `https://username.github.io/syifa-22nd-birthday`.

---

Semoga hari ulang tahun Syifa menjadi momen yang penuh kebahagiaan, haru, dan berkah, serta menjadi langkah indah menuju pernikahan impian kalian berdua! 💍💖
