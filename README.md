# Website Kampanye Hukum Tua No. 2

## Struktur File

```
kampanye-hukum-tua/
├── index.html    ← Struktur halaman (HTML)
├── style.css     ← Tampilan & desain (CSS)
├── script.js     ← Data kegiatan, galeri, interaksi (JS)
└── README.md     ← Panduan ini
└── images/       ← Buat folder ini, taruh foto di sini
    ├── foto-calon.jpg
    ├── foto-profil.jpg
    ├── kegiatan-1.jpg
    └── ...
```

---

## Cara Edit Konten

### Nama & Info Calon
Buka `index.html`, cari semua teks dalam kurung siku `[...]` dan ganti:
- `[NAMA CALON]` → nama calon
- `[Nama Desa]` → nama desa
- `[Nama Lengkap Calon]` → nama lengkap
- `[Kota]`, `[Tanggal Lahir]`, `[Pendidikan Terakhir]`, dst.

### Nomor WhatsApp
Cari semua `6281234567890` di `index.html` (ada 3 tempat) dan ganti.
Format: `62` + nomor tanpa angka 0 depan.
Contoh: `081234567890` → `6281234567890`

### Visi
Di `index.html`, cari `<!-- CARA EDIT: Ganti teks visi -->` dan ubah teksnya.

### Misi (6 poin)
Buka `script.js`, edit array `daftarMisi`:
```js
const daftarMisi = [
  { judul: "Nama Program", teks: "Deskripsi program..." },
  // tambah baris baru untuk misi baru
];
```

### Kegiatan
Buka `script.js`, edit array `activities`:
```js
const activities = [
  {
    title: "Nama Kegiatan",
    date: "12 Mei 2026",
    image: "images/foto-kegiatan.jpg",
    description: "Deskripsi singkat..."
  },
];
```

### Galeri Foto
Buka `script.js`, edit array `galeri`:
```js
const galeri = [
  { src: "images/foto1.jpg", ket: "Keterangan foto" },
];
```

---

## Cara Pasang Foto Asli

1. Buat folder `images/` di samping `index.html`
2. Masukkan foto ke folder tersebut
3. Di `index.html`, ganti URL `https://placehold.co/...` dengan `images/nama-file.jpg`
4. Di `script.js`, ganti juga URL di array `activities` dan `galeri`

**Ukuran foto yang disarankan:**
| Bagian        | Ukuran        |
|---------------|---------------|
| Hero (calon)  | 440 × 528 px  |
| Profil        | 400 × 530 px  |
| Kegiatan      | 640 × 420 px  |
| Galeri        | 600 × 600 px  |

---

## Deploy Gratis

| Platform        | Cara |
|-----------------|------|
| **Netlify**     | Drag-and-drop folder ke netlify.com/drop |
| **GitHub Pages**| Upload ke repo, aktifkan Pages di Settings |
| **Vercel**      | Import repo GitHub |

---

## Warna Utama

Ganti di `style.css` bagian `:root`:
```css
--merah: #C0000A;  /* warna utama */
```
