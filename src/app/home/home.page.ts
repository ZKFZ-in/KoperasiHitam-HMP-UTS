import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';
import { TransactionService } from '../transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0
  produkTerlaris: string = '';

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransactionService
    , private cdr: ChangeDetectorRef
  ) { console.log('HomePage DIBUAT'); }

  ngOnInit() {
    this.loadDataDashboard();
  }

  ionViewWillEnter() {
    this.loadDataDashboard();
    this.cdr.detectChanges();
  }

  loadDataDashboard() {
    this.jumlahProduk = this.produkService.getJumlahProduk();
    this.totalTransaksiHariIni = this.transaksiService.getTotalTransaksiHariIni();
    this.produkTerlaris = this.produkService.getProdukTerlaris();
  }
  
}