import { Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';
import { TransaksiService } from '../transaksi';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0;
  produkTerlaris: string = '-';

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransaksiService
  ) {}

  ngOnInit() {
    this.loadDataDashboard();
  }

  ionViewWillEnter() {
    this.loadDataDashboard();
  }

  loadDataDashboard() {
    this.jumlahProduk = this.produkService.getJumlahProduk();
    this.totalTransaksiHariIni = this.transaksiService.getTotalTransaksiHariIni();
    this.produkTerlaris = this.produkService.getProdukTerlaris();
  }
}