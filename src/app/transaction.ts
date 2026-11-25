import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart';
import { environment } from '../environments/environment';

export interface Transaksi {
  id: number;
  tanggal: string; // dari JSON berupa string ISO, mis. "2026-10-01T14:30:00"
  items: CartItem[];
  total: number;
}

export interface HasilTransaksiBaru {
  result: string;
  transaksi: Transaksi;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaksi[]> {
    return this.http.get<Transaksi[]>(`${this.api}/transaksi.php`);
  }

  getTransaksiById(id: number): Observable<Transaksi> {
    return this.http.get<Transaksi>(`${this.api}/transaksi_detail.php?id=${id}`);
  }

  // Yang dikirim hanya id produk dan jumlah. Total, stok, dan harga dihitung oleh server.
  addTransaction(items: CartItem[]): Observable<HasilTransaksiBaru> {
    const body = {
      items: items.map(i => ({ produkId: i.produk.id, jumlah: i.jumlah }))
    };
    return this.http.post<HasilTransaksiBaru>(`${this.api}/transaksi_baru.php`, body);
  }
}

// Pengganti getTotalTransaksiHariIni() lama: dihitung dari daftar hasil API
export function hitungTotalHariIni(daftar: Transaksi[]): number {
  const hariIni = new Date().toDateString();
  let total = 0;
  for (const t of daftar) {
    if (new Date(t.tanggal).toDateString() === hariIni) {
      total += t.total;
    }
  }
  return total;
}
