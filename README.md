# SIMOBILE - Mobile Cashier Prototype for Toko Makmur Jaya

**SIMOBILE** (Sistem Kasir Mobile) adalah aplikasi kasir berbasis mobile (*Point of Sale*) yang dirancang untuk mempermudah operasional dan pencatatan transaksi penjualan harian di **Toko Makmur Jaya**. Aplikasi ini dibangun menggunakan **Ionic Framework** dan **Angular**, mengusung arsitektur hybrid modern dengan performa tinggi dan tampilan antarmuka yang responsif.

---

## Fitur Utama

- **Dashboard Ringkasan Penjualan**: 
  - Menampilkan total nominal penjualan hari ini, jumlah jenis produk, dan produk terlaris.
  - Dilengkapi animasi visual *Count-Up* dan efek kartu menggunakan `AnimationController`.

- **Katalog & Manajemen Produk**:
  - Menampilkan daftar produk lengkap dengan gambar, kategori, stok sisa, harga beli, dan harga jual.
  - Indikator warna stok otomatis (stok tersedia / habis).

- **Detail Produk & Prompt Pembelian**:
  - Menampilkan estimasi keuntungan per unit dan deskripsi produk.
  - *Alert Prompt* interaktif untuk memasukkan jumlah unit barang sebelum dimasukkan ke keranjang.

- **Keranjang Belanja & Checkout**:
  - Mengatur jumlah pesanan (+/-), menghapus item, dan kalkulasi subtotal/total secara otomatis.
  - Validasi stok *real-time* saat penambahan item.
  - Konfirmasi transaksi yang otomatis mengurangi stok produk di inventaris.

- **Riwayat Transaksi & Pengurutan (Sorting)**:
  - Menyimpan seluruh transaksi penjualan secara terstruktur.
  - Fitur pengurutan (*Sorting*) berdasarkan: **Tanggal Terbaru**, **Tanggal Terlama**, **Total Termahal**, dan **Total Termurah**.

- **Detail Transaksi (Route Parameter)**:
  - Halaman khusus rincian transaksi berbasis navigasi URL (`/detail-transaksi/:id`).
  - Menampilkan daftar barang yang dibeli, harga per unit, jumlah, dan total pembayaran.

- **Dark Mode & Light Mode**:
  - Fitur sakelar mode gelap/terang melalui `ion-toggle` yang terintegrasi dengan `variables.scss` (`body.dark`).

---

## Teknologi & Stack

- **Framework**: [Ionic Framework 7+](https://ionicframework.com/)
- **Frontend Core**: [Angular](https://angular.io/) (TypeScript, HTML5, SCSS)
- **State Management**: Angular Services (`@Injectable({ providedIn: 'root' })`)
- **Routing**: Angular Router with Route Parameters (`:id`)
- **Icon Set**: Ionicons

---

## Struktur Proyek

```text
src/
├── app/
│   ├── home/                  # Halaman Dashboard & Ringkasan
│   ├── produk/                # Halaman Katalog Produk
│   ├── detail-produk/         # Halaman Detail Produk & Alert Prompt
│   ├── keranjang/             # Halaman Keranjang & Konfirmasi Checkout
│   ├── transaksi/             # Halaman Riwayat Transaksi & Sorting
│   ├── detail-transaksi/      # Halaman Detail Rincian Transaksi (:id)
│   ├── cart.ts                # Cart Service (Kelola Keranjang)
│   ├── produk.ts              # Produk Service (Kelola Data & Stok Produk)
│   └── transaction.ts         # Transaction Service (Kelola Riwayat Transaksi)
└── theme/
    └── variables.scss         # Variabel Tema SCSS & Dark Mode Styling
```

---

## Cara Menjalankan Proyek di Lokal

### Prasyarat:
- Node.js (v18 atau lebih baru)
- npm
- Ionic CLI (`npm install -g @ionic/cli`)

### Langkah-langkah:

1. **Clone Repository**:
   ```bash
   git clone https://github.com/username/simobile-toko-makmur-jaya.git
   cd simobile-toko-makmur-jaya
   ```

2. **Install Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**:
   ```bash
   ionic serve
   ```

4. Buka browser dan akses alamat: `http://localhost:8100`

---
