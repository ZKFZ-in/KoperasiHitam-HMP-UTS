import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaksi} from '../transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  daftarTransaksi: Transaksi[] = [];

  // Pilihan Sorting
  sortOptions: string = 'terbaru';

  //kontrol modal detail transaksi
  isDetailModalOpen = false;
  selectedTransaksi: Transaksi | undefined;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.daftarTransaksi = this.transactionService.getTransactions();
  }

  //ionViewWillEnter untuk memastikan daftar transaksi 
  //selalu terbaru setiap kali Tab Transaksi dibuka
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

  //buka modal detail transaksi saat salah satu transaksi dipilih
  bukaDetail(transaksi: Transaksi) {
    this.selectedTransaksi = transaksi;
    this.isDetailModalOpen = true;
  }

  //tutup modal detail transaksi
  tutupDetail() {
    this.isDetailModalOpen = false;
    this.selectedTransaksi = undefined;
  }

}
