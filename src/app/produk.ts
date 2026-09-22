import { Service } from '@angular/core';
import { Injectable } from '@angular/core';

@Service()
export class Produk {
}

export interface Produk {
  id: number;
  nama: string;
  stok: number;
  hargaBeli : number;
  hargaJual : number;
  gambar?: string;
  kategori?: string;
  deskripsi?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdukService {
    private product: Produk[] = [ 
        { 
            id: 1, 
            nama: 'Beras 5kg', 
            stok: 15, 
            hargaBeli: 60000, 
            hargaJual: 68000, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Sembako', 
            deskripsi: 'Beras putih pulen kualitas super.' 
        }, 
        { 
            id: 2, 
            nama: 'Minyak Goreng 2L', 
            stok: 8, 
            hargaBeli: 28000, 
            hargaJual: 32000, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Sembako', 
            deskripsi: 'Minyak goreng kelapa sawit murni.' 
        }, 
        { 
            id: 3, 
            nama: 'Gula Pasir 1kg', 
            stok: 0, 
            hargaBeli: 14000, 
            hargaJual: 16000, 
            gambar: '', 
            kategori: 'Sembako', 
            deskripsi: 'Gula pasir tebu murni.' 
        }, 
        { 
            id: 4, 
            nama: 'Telur Ayam 1kg', 
            stok: 20, 
            hargaBeli: 26000, 
            hargaJual: 29000, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Sembako', 
            deskripsi: 'Telur ayam negeri segar.' 
        }, 
        { 
            id: 5, 
            nama: 'Kecap Manis 520ml', 
            stok: 12, 
            hargaBeli: 21000, 
            hargaJual: 24500, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Bumbu', 
            deskripsi: 'Kecap manis kedelai hitam pilihan.' 
        }, 
        { 
            id: 6, 
            nama: 'Mie Instant Goreng', 
            stok: 50, 
            hargaBeli: 2800, 
            hargaJual: 3100, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Makanan', 
            deskripsi: 'Mie instant rasa goreng terfavorit.' 
        }, 
        { 
            id: 7, 
            nama: 'Susu UHT 1L', 
            stok: 5, 
            hargaBeli: 15000, 
            hargaJual: 18000, 
            gambar: '', 
            kategori: 'Minuman', 
            deskripsi: 'Susu segar rasa full cream.' 
        }, 
        { 
            id: 8, 
            nama: 'Sabun Cuci Pakaian 770g', 
            stok: 10, 
            hargaBeli: 19000, 
            hargaJual: 22500, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Kebersihan', 
            deskripsi: 'Deterjen bubuk anti noda.' 
        }, 
        { 
            id: 9, 
            nama: 'Kopi Bubuk Kudanil 165g', 
            stok: 18, 
            hargaBeli: 11000, 
            hargaJual: 13000, 
            gambar: 'https://via.placeholder.com/150', 
            kategori: 'Minuman', 
            deskripsi: 'Kopi bubuk murni aroma mantap.' 
        }, 
        { 
            id: 10, 
            nama: 'Teh Celup Melati', 
            stok: 0, 
            hargaBeli: 6000, 
            hargaJual: 7500, 
            gambar: '', 
            kategori: 'Minuman', 
            deskripsi: 'Teh celup dengan aroma melati.' 
        } 
    ];

    constructor() { }

    getProduk(): Produk[] {
        return this.product;
    }

    getProdukById(id: number): Produk | undefined {
        return this.product.find(produk => produk.id === id);
    }
}
