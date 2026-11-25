import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

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

export interface HasilSimpan {
    result: string;
    id?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProdukService {
    private readonly api = environment.apiUrl;

    constructor(private http: HttpClient) { }

    // POIN 6 (IndexedDB): sisipkan cache di sini, dan hanya di sini.
    //   tap(data => simpan ke IndexedDB)  -> saat API berhasil
    //   catchError(() => ambil dari IndexedDB) -> saat offline
    getProduk(): Observable<Produk[]> {
        return this.http.get<Produk[]>(`${this.api}/produk.php`);
    }

    getProdukById(id: number): Observable<Produk> {
        return this.http.get<Produk>(`${this.api}/produk_detail.php?id=${id}`);
    }

    addProduk(data: Produk): Observable<HasilSimpan> {
        return this.http.post<HasilSimpan>(`${this.api}/produk_tambah.php`, data);
    }

    updateProduk(id: number, data: Produk): Observable<HasilSimpan> {
        return this.http.post<HasilSimpan>(`${this.api}/produk_ubah.php`, { ...data, id });
    }
}

// Pengganti getProdukTerlaris() lama: dihitung dari daftar yang sudah diambil dari API
export function getProdukTerlaris(daftar: Produk[]): string {
    if (daftar.length === 0) {
        return 'Belum ada produk';
    }
    let terlaris = daftar[0];
    for (let i = 1; i < daftar.length; i++) {
        if ((daftar[i].terjual || 0) > (terlaris.terjual || 0)) {
            terlaris = daftar[i];
        }
    }
    return terlaris.nama;
}
