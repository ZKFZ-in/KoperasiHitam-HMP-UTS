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

  //kontrol modal detail transaksi
  isDetailModalOpen = false;
  selectedTransaksi: Transaksi | undefined;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  //ionViewWillEnter untuk memastikan daftar transaksi 
  //selalu terbaru setiap kali Tab Transaksi dibuka
  ionViewWillEnter() {
    this.daftarTransaksi = this.transactionService.getTransactions();
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
