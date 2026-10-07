# SIMOBILE - Mobile Cashier Prototype for Toko Makmur Jaya

**SIMOBILE** (Sistem Kasir Mobile) adalah aplikasi kasir berbasis mobile (*Point of Sale*) yang dirancang untuk mempermudah operasional dan pencatatan transaksi penjualan harian di **Toko Makmur Jaya**. Aplikasi ini dibangun menggunakan **Ionic Framework** dan **Angular**, mengusung arsitektur hybrid modern dengan performa tinggi dan tampilan antarmuka yang responsif.

---

## Fitur Utama
- **Struktur Navigasi**:
  - Menampilkan 4 tab yang akan mengarahkan ke masing masing page yaitu Dashboard, Produk, Transaksi, dan Profile
  - Menampilkan 4 menu tambahan yang terdapat di Drawe/Slide yang akan mengarahkan ke page masing masing yaitu Dashboard, About App, Setting, dan Logout

- **Dashboard Ringkasan Penjualan**: 
  - Menampilkan total nominal penjualan hari ini, jumlah jenis produk, dan produk terlaris.
  - Melakukan refresh tampilan dashboard dengan menekan button refresh.

- **Katalog & Manajemen Produk**:
  - Menampilkan daftar produk lengkap dengan nama produk, stok sisa, harga beli, dan harga jual.
  - Pencarian produk real time saat mengetik jenis produk tanpa perlu submit.

- **Detail Produk & Prompt Pembelian**:
  - Menampilkan estimasi keuntungan per unit dan deskripsi produk.
  - Menampilkan gambar produk otomatis
  - Indikator warna stok otomatis (stok tersedia / habis).
  - *Alert Prompt* interaktif untuk memasukkan jumlah unit barang sebelum dimasukkan ke keranjang.

- **Tambah & Edit Produk**:
  -Menampilkan halaman untuk menambahkan produk, yang dimana perlu menuliskan nama produk, harga beli, harga jual, stok. Lalu untuk link gambar,kategori dan Deskripsi bisa dimasukkan tetapi tidak wajib atau optional.
  -Menampilkan halaman untuk melakukan edit produk, mulai dari nama produk,harga beli, harga jual, stok, link gambar, deskripsi dan kategori.

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
  - Fitur sakelar mode gelap/terang melalui `ion-toggle` di halaman setting yang    terintegrasi dengan `variables.scss` (`ion-app.dark`).

---

## Teknologi & Stack

- **Framework**: [Ionic Framework 9](https://ionicframework.com/)
- **Frontend Core**: [Angular 22.0.1](https://angular.io/) (TypeScript, HTML5, SCSS)
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
   git clone https://github.com/ZKFZ-in/KoperasiHitam-HMP-UTS
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
