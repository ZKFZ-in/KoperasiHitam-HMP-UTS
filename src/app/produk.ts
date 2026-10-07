import { Injectable } from '@angular/core';


export interface Produk {
    id: number;
    nama: string;
    stok: number;
    hargaBeli: number;
    hargaJual: number;
    terjual?: number;
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
            terjual: 5,
            gambar: 'https://images.alodokter.com/dk0z4ums3/image/upload/v1784169182/attached_image/pilihan-beras-terbaik-untuk-keluarga.jpg',
            kategori: 'Sembako',
            deskripsi: 'Beras putih pulen kualitas super.'
        },
        {
            id: 2,
            nama: 'Minyak Goreng 2L',
            stok: 8,
            hargaBeli: 28000,
            hargaJual: 32000,
            terjual: 10,
            gambar: 'https://image.astronauts.cloud/product-images/2026/7/SaniaMinyakGorengPou_c0ea2113-d75b-4279-aa62-d2fa24b8f4db_900x900.png',
            kategori: 'Sembako',
            deskripsi: 'Minyak goreng kelapa sawit murni.'
        },
        {
            id: 3,
            nama: 'Gula Pasir 1kg',
            stok: 0,
            hargaBeli: 14000,
            hargaJual: 16000,
            terjual: 12,
            gambar: 'https://img.lazcdn.com/g/ff/kf/S805198afe58c44a69b45589484e0ef6fb.jpg_720x720q80.jpg',
            kategori: 'Sembako',
            deskripsi: 'Gula pasir tebu murni.'
        },
        {
            id: 4,
            nama: 'Telur Ayam 1kg',
            stok: 20,
            hargaBeli: 26000,
            hargaJual: 29000,
            terjual: 5,
            gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw6qcqaeeah634',
            kategori: 'Sembako',
            deskripsi: 'Telur ayam negeri segar.'
        },
        {
            id: 5,
            nama: 'Kecap Manis 520ml',
            stok: 12,
            hargaBeli: 21000,
            hargaJual: 24500,
            terjual: 2,
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
            terjual: 9,
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
            terjual: 20,
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
            terjual: 15,
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
            terjual: 7,
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
            terjual: 4,
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

    addProduk(data: Produk) {
        let maxId = 0;

        for (let p of this.product) {
            if (p.id > maxId) {
                maxId = p.id;
            }
        }

        const newId = maxId + 1;

        const newProduct: Produk = {
            id: newId,
            nama: data.nama,
            stok: data.stok,
            hargaBeli: data.hargaBeli,
            hargaJual: data.hargaJual,
            gambar: data.gambar,
            kategori: data.kategori,
            deskripsi: data.deskripsi
        };

        this.product.push(newProduct);
    }

    reduceStock(id: number, qty: number) {
    const produk = this.getProdukById(id);
    if (produk) {
        produk.stok -= qty;
        if (produk.stok < 0) produk.stok = 0;
        produk.terjual = (produk.terjual || 0) + qty;
    }
}
    
    updateProduk(id: number, data: Produk) {
        for (let i = 0; i < this.product.length; i++) {
            if (this.product[i].id === id) {
                this.product[i].nama = data.nama;
                this.product[i].stok = data.stok;
                this.product[i].hargaBeli = data.hargaBeli;
                this.product[i].hargaJual = data.hargaJual;
                this.product[i].gambar = data.gambar;
                this.product[i].kategori = data.kategori;
                this.product[i].deskripsi = data.deskripsi;
                break;
            }
        }
    }


    getJumlahProduk(): number {
        return this.product.length;
    }


    getProdukTerlaris(): string {
        if (this.product.length === 0) {
            return 'Belum ada produk';
        }

        let produkTerlaris = this.product[0];

        for (let i = 1; i < this.product.length; i++) {

            const terjualSekarang = this.product[i].terjual || 0;
            const terjualTertinggi = produkTerlaris.terjual || 0;

            if (terjualSekarang > terjualTertinggi) {
                produkTerlaris = this.product[i];
            }
        }

        return produkTerlaris.nama;
    }
}
