import { Component, ChangeDetectorRef } from '@angular/core';
import { ProdukService, getProdukTerlaris } from '../produk';
import { TransactionService, hitungTotalHariIni } from '../transaction';
import { UiService } from '../uiloading';
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
    private animasi: Animasi,
    private ui: UiService,
    private cdr: ChangeDetectorRef
  ) { }

  ionViewWillEnter() {
    this.loadDataDashboard();
  }

  loadDataDashboard() {
    this.ui.tampilLoading();
    // 1) ambil produk dulu, 2) setelah berhasil baru ambil transaksi
    this.produkService.getProduk().subscribe({
      next: (produk) => {
        this.jumlahProduk = produk.length;
        this.produkTerlaris = getProdukTerlaris(produk);
        this.cdr.markForCheck();

        this.transaksiService.getTransactions().subscribe({
          next: (transaksi) => {
            this.totalTransaksiHariIni = hitungTotalHariIni(transaksi);
            this.ui.sembunyiLoading();
            this.cdr.markForCheck();
          },
          error: (err) => {
            this.ui.sembunyiLoading();
            this.ui.tampilError(err);
          }
        });
      },
      error: (err) => {
        this.ui.sembunyiLoading();
        this.ui.tampilError(err);
      }
    });
    this.animasi.refreshBerputar('.refresh');
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('.ion-page');
  }
}