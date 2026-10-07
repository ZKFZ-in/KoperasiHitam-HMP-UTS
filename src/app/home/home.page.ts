import { Component } from '@angular/core';
import { ProdukService } from '../produk';
import { TransactionService } from '../transaction';
import { AnimationController } from '@ionic/angular';
import { Animasi } from '../animasi';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0;
  produkTerlaris: string = '-';

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransactionService,
    private animasi: Animasi
  ) {
    this.loadDataDashboard();
  }

  ionViewWillEnter() {
    this.loadDataDashboard();
  }

  loadDataDashboard() {
    this.jumlahProduk = this.produkService.getJumlahProduk();
    this.totalTransaksiHariIni = this.transaksiService.getTotalTransaksiHariIni();
    this.produkTerlaris = this.produkService.getProdukTerlaris();
    this.animasi.refreshBerputar('.refresh');
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('.ion-page');
  }
}