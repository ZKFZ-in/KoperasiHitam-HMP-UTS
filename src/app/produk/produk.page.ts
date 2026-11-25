import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UiService } from '../uiloading';
import { Produk, ProdukService } from '../produk';
import {Animasi} from '../animasi';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false
})
export class ProdukPage implements OnInit {
  daftarProduk: Produk[] = [];


  kataKunci: string = '';

  constructor(
    private produkService: ProdukService,
    private animasi:Animasi,
    private ui: UiService,
    private cdr: ChangeDetectorRef
  ) { }

  // Data dimuat di ionViewWillEnter (dipanggil juga saat pertama kali masuk halaman)
  ngOnInit() { }

  ionViewWillEnter() {
    this.loadProduk();
  }

  loadProduk() {
    this.ui.tampilLoading();
    this.produkService.getProduk()
      .subscribe({
        next: (data) => {
          this.daftarProduk = data;
          this.ui.sembunyiLoading();
          this.cdr.markForCheck();
        },
        error: (err) => {
          this.ui.sembunyiLoading();
          this.ui.tampilError(err);
        }
      });
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('.ion-page');
  }

  get produkTerfilter(): Produk[] {
    const kunci = (this.kataKunci || '').trim().toLowerCase();

    if (kunci === '') {
      return this.daftarProduk;
    }

    return this.daftarProduk.filter(item =>
      item.nama.toLowerCase().includes(kunci)
    );
  }
}