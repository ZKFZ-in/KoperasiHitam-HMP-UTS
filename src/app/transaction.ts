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
  private riwayatTransaksi: Transaksi[] = [];

  constructor() { }

  // Simpan transaksi baru ke riwayat
  addTransaction(items: CartItem[], total: number): Transaksi {
    const newTransaksi: Transaksi = {
      id: Date.now(),
      tanggal: new Date(),
      items: [...items],
      total: total
    };
    this.riwayatTransaksi.unshift(newTransaksi); // Simpan transaksi terbaru di paling atas
    return newTransaksi;
  }

  // Ambil seluruh riwayat transaksi
  getTransactions(): Transaksi[] {
    return this.riwayatTransaksi;
  }
}
