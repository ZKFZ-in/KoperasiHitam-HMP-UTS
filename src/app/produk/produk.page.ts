import { Component, OnInit } from '@angular/core';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false
})
export class ProdukPage implements OnInit {
  daftarProduk: Produk[] = [];

  
  kataKunci: string = '';

  constructor(private produkService: ProdukService) {}

  ngOnInit() {
    this.loadProduk();
  }

  ionViewWillEnter() {
    this.loadProduk();
  }

  loadProduk() {
    this.daftarProduk = this.produkService.getProduk();
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