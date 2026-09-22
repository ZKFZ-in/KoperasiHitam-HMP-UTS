import { Component, OnInit } from '@angular/core';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  daftarProduk: Produk[] = [];

  constructor(private produkService: ProdukService) { }

  ngOnInit() {
    this.daftarProduk = this.produkService.getProduk();
  }

}
