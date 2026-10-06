import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';
import { TransactionService } from '../transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransactionService
    , private cdr: ChangeDetectorRef
  ) { console.log('HomePage DIBUAT'); }

  ngOnInit() {

  }

  ionViewWillEnter() {
    console.log('[Dashboard] ionViewWillEnter jalan');
  }

  getJumlahProduk(): number {
    return this.produkService.getJumlahProduk();
  }

  getTotalHariIni(): number {
    return this.transaksiService.getTotalTransaksiHariIni();
  }

  getProdukTerlaris(): string {
    return this.produkService.getProdukTerlaris();
  }
}