import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukService } from '../produk';
import { ToastController } from '@ionic/angular';
import { CartService } from '../cart';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  produkDetail: Produk | undefined;
  defaultGambar: string = 'assets/icon/favicon.png';
  
  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService,
    private cartService: CartService,
    private toastController: ToastController  
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.produkDetail = this.produkService.getProdukById(id);
    });
  }

  async tambahKeranjang() {
    if (this.produkDetail && this.produkDetail.stok > 0) {
      this.cartService.addToCart(this.produkDetail);
    } else {
      const toast = await this.toastController.create({
        message: '$(this.produkDetail.nama) berhasil ditambahkan ke keranjang!',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }
  }

}
