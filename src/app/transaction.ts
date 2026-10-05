import { Injectable } from '@angular/core';
import { CartItem } from './cart';

export interface Transaksi {
  id: number;
  tanggal: Date;
  items: CartItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private riwayatTransaksi: Transaksi[] = [
    { 
      id: 1727768400000, 
      tanggal: new Date('2026-10-01T14:30:00'), 
      total: 556500, 
      items: [ 
        { produk: { 
          id: 1, 
          nama: 'Beras 5kg', 
          stok: 15, 
          hargaBeli: 60000, 
          hargaJual: 68000, 
          terjual: 5, 
          gambar: 'https://images.alodokter.com/dk0z4ums3/image/upload/v1784169182/attached_image/pilihan-beras-terbaik-untuk-keluarga.jpg', 
          kategori: 'Sembako', 
          deskripsi: 'Beras putih pulen kualitas super.' 
        }, jumlah: 2 }, 
        { produk: { 
          id: 2, 
          nama: 'Minyak Goreng 2L', 
          stok: 8, 
          hargaBeli: 28000, 
          hargaJual: 32000, 
          terjual: 10, 
          gambar: 'https://image.astronauts.cloud/product-images/2026/7/SaniaMinyakGorengPou_c0ea2113-d75b-4279-aa62-d2fa24b8f4db_900x900.png', 
          kategori: 'Sembako', 
          deskripsi: 'Minyak goreng kelapa sawit murni.' 
          }, jumlah: 4 },
        { produk: { 
          id: 7, 
          nama: 'Susu UHT 1L', 
          stok: 5, 
          hargaBeli: 15000, 
          hargaJual: 18000, 
          terjual: 20, 
          gambar: '', 
          kategori: 'Minuman', 
          deskripsi: 'Susu segar rasa full cream.' 
        }, jumlah: 10 }, 
        { produk: { 
          id: 8, 
          nama: 'Sabun Cuci Pakaian 770g', 
          stok: 10, 
          hargaBeli: 19000, 
          hargaJual: 22500, 
          terjual: 15, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Kebersihan', 
          deskripsi: 'Deterjen bubuk anti noda.' 
        }, jumlah: 5 } 
      ] 
    }, { 
      id: 1727840700000, 
      tanggal: new Date('2026-10-02T10:15:00'), 
      total: 312500, 
      items: [ 
        { produk: { 
          id: 3, 
          nama: 'Gula Pasir 1kg', 
          stok: 0, 
          hargaBeli: 14000, 
          hargaJual: 16000, 
          terjual: 12, 
          gambar: 'https://img.lazcdn.com/g/ff/kf/S805198afe58c44a69b45589484e0ef6fb.jpg_720x720q80.jpg', 
          kategori: 'Sembako', 
          deskripsi: 'Gula pasir tebu murni.' 
        }, jumlah: 8 }, 
        { produk: { 
          id: 4, 
          nama: 'Telur Ayam 1kg', 
          stok: 20, 
          hargaBeli: 26000, 
          hargaJual: 29000, 
          terjual: 5, 
          gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw6qcqaeeah634', 
          kategori: 'Sembako', 
          deskripsi: 'Telur ayam negeri segar.' 
        }, jumlah: 3 }, 
        { produk: { 
          id: 6, 
          nama: 'Mie Instant Goreng', 
          stok: 50, 
          hargaBeli: 2800, 
          hargaJual: 3100, 
          terjual: 9, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Makanan', 
          deskripsi: 'Mie instant rasa goreng terfavorit.' 
        }, jumlah: 5 }, 
        { produk: { 
          id: 9, 
          nama: 'Kopi Bubuk Kudanil 165g', 
          stok: 18, 
          hargaBeli: 11000, 
          hargaJual: 13000, 
          terjual: 7, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Minuman', 
          deskripsi: 'Kopi bubuk murni aroma mantap.' 
        }, jumlah: 4 }, 
        { produk: { 
          id: 10, 
          nama: 'Teh Celup Melati', 
          stok: 0, 
          hargaBeli: 6000, 
          hargaJual: 7500, 
          terjual: 4,
          gambar: '', 
          kategori: 'Minuman', 
          deskripsi: 'Teh celup dengan aroma melati.' 
        }, jumlah: 4 } 
      ] 
    }, { 
      id: 1727947500000, 
      tanggal: new Date('2026-10-03T16:45:00'), 
      total: 1023400, 
      items: [ 
        { produk: { 
          id: 1, 
          nama: 'Beras 5kg', 
          stok: 15, 
          hargaBeli: 60000, 
          hargaJual: 68000, 
          terjual: 5, 
          gambar: 'https://images.alodokter.com/dk0z4ums3/image/upload/v1784169182/attached_image/pilihan-beras-terbaik-untuk-keluarga.jpg', 
          kategori: 'Sembako', 
          deskripsi: 'Beras putih pulen kualitas super.' 
        }, jumlah: 3 }, 
        { produk: { 
          id: 2, 
          nama: 'Minyak Goreng 2L', 
          stok: 8, 
          hargaBeli: 28000, 
          hargaJual: 32000, 
          terjual: 10, 
          gambar: 'https://image.astronauts.cloud/product-images/2026/7/SaniaMinyakGorengPou_c0ea2113-d75b-4279-aa62-d2fa24b8f4db_900x900.png', 
          kategori: 'Sembako', 
          deskripsi: 'Minyak goreng kelapa sawit murni.' 
        }, jumlah: 6 }, 
        { produk: { 
          id: 3, 
          nama: 'Gula Pasir 1kg',
          stok: 0, 
          hargaBeli: 14000, 
          hargaJual: 16000, 
          terjual: 12, 
          gambar: 'https://img.lazcdn.com/g/ff/kf/S805198afe58c44a69b45589484e0ef6fb.jpg_720x720q80.jpg', 
          kategori: 'Sembako', 
          deskripsi: 'Gula pasir tebu murni.' 
        }, jumlah: 4 }, 
        { produk: { 
          id: 4, 
          nama: 'Telur Ayam 1kg', 
          stok: 20, 
          hargaBeli: 26000, 
          hargaJual: 29000, 
          terjual: 5, 
          gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw6qcqaeeah634', 
          kategori: 'Sembako', 
          deskripsi: 'Telur ayam negeri segar.' 
        }, jumlah: 2 }, 
        { produk: { 
          id: 5, 
          nama: 'Kecap Manis 520ml', 
          stok: 12, 
          hargaBeli: 21000, 
          hargaJual: 24500, 
          terjual: 2, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Bumbu', 
          deskripsi: 'Kecap manis kedelai hitam pilihan.' 
        }, jumlah: 2 }, 
        { produk: { 
          id: 6, 
          nama: 'Mie Instant Goreng', 
          stok: 50, 
          hargaBeli: 2800, 
          hargaJual: 3100, 
          terjual: 9, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Makanan', 
          deskripsi: 'Mie instant rasa goreng terfavorit.' 
        }, jumlah: 4 }, 
        { produk: { 
          id: 7, 
          nama: 'Susu UHT 1L', 
          stok: 5, 
          hargaBeli: 15000, 
          hargaJual: 18000, 
          terjual: 20, 
          gambar: '', 
          kategori: 'Minuman', 
          deskripsi: 'Susu segar rasa full cream.' 
        }, jumlah: 10 }, 
        { produk: { 
          id: 8, 
          nama: 'Sabun Cuci Pakaian 770g', 
          stok: 10, 
          hargaBeli: 19000, 
          hargaJual: 22500, 
          terjual: 15, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Kebersihan', 
          deskripsi: 'Deterjen bubuk anti noda.' 
        }, jumlah: 10 }, 
        { produk: { 
          id: 9, 
          nama: 'Kopi Bubuk Kudanil 165g', 
          stok: 18, 
          hargaBeli: 11000, 
          hargaJual: 13000, 
          terjual: 7, 
          gambar: 'https://via.placeholder.com/150', 
          kategori: 'Minuman', 
          deskripsi: 'Kopi bubuk murni aroma mantap.' 
        }, jumlah: 3 
      } 
    ] }
  ];

  constructor() { }

  // Simpan transaksi baru ke riwayat
  addTransaction(items: CartItem[], total: number): Transaksi {
    // Buat salinan dari items untuk data di riwayat tdak hilang saat keranjang kosong
    const copiedItems: CartItem[] = items.map(item => ({
      produk: { ...item.produk },
      jumlah: item.jumlah 
    }));
    
    const newTransaksi: Transaksi = {
      id: Date.now(),
      tanggal: new Date(),
      items: [...copiedItems],
      total: total
    };
    this.riwayatTransaksi.unshift(newTransaksi); // Simpan transaksi terbaru di paling atas
    return newTransaksi;
  }

  // Ambil seluruh riwayat transaksi
  getTransactions(): Transaksi[] {
    return this.riwayatTransaksi;
  }

  getTotalTransaksiHariIni(): number {
    let totalHariIni = 0;

    const hariIni = new Date().toDateString();
    console.log('hari ini:', hariIni, '| jumlah transaksi:', this.riwayatTransaksi.length, '| terbaru:', this.riwayatTransaksi[0]?.tanggal);

    for(const t of this.riwayatTransaksi)
    {
      if(new Date(t.tanggal).toDateString() === hariIni)
      {
        totalHariIni += t.total;
      }
    }
    console.log('total transaksi terbaru:', this.riwayatTransaksi[0]?.total, '| hasil hitung:', totalHariIni);
    return totalHariIni;
  }
}
