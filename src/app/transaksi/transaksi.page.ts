import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaksi} from '../transaction';
import {Animasi} from '../animasi';
@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  daftarTransaksi: Transaksi[] = [];

  sortOptions: string = 'terbaru';

  constructor(
    private transactionService: TransactionService,
    private animasi: Animasi
  ) { }

  ngOnInit() {
    this.daftarTransaksi = this.transactionService.getTransactions();
  }

  ionViewWillEnter() {
    this.daftarTransaksi = this.transactionService.getTransactions();
  }

  //Sorting daftar transaksi berdasarkan pilihan user
  get listTransaksiSorted(): Transaksi[] {
    return [...this.daftarTransaksi].sort((a, b) => {
      const timeA = new Date(a.tanggal).getTime();
      const timeB = new Date(b.tanggal).getTime();

      if (this.sortOptions === 'terbaru') {
        return timeB - timeA;
      } else if (this.sortOptions === 'terlama') {
        return timeA - timeB;
      } else if (this.sortOptions === 'termahal') {
        return b.total - a.total;
      } else if (this.sortOptions === 'termurah') {
        return a.total - b.total;
      }
      return 0;
    });
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('.ion-page');
  }

}
