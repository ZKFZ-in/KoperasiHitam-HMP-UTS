import { Injectable } from '@angular/core';

export interface Transaksi {
  id: number;
  tanggal: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
    //dummy
  private daftarTransaksi: Transaksi[] = [
    { id: 1, tanggal: '2026-09-29', total: 150000 },
    { id: 2, tanggal: '2026-09-29', total: 75000 }
  ];

  constructor() { }

  getTotalTransaksiHariIni(): number {
    let totalHariIni = 0;
    
    const hariIni = new Date();
    const tahun = hariIni.getFullYear();
    const bulan = String(hariIni.getMonth() + 1).padStart(2, '0');
    const tanggal = String(hariIni.getDate()).padStart(2, '0');
    
    const tanggalHariIni = `${tahun}-${bulan}-${tanggal}`;

    for (let t of this.daftarTransaksi) {
      if (t.tanggal === tanggalHariIni) {
        totalHariIni = totalHariIni + t.total;
      }
    }

    return totalHariIni;
  }
}