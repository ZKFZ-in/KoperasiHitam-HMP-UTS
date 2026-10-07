import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukService } from '../produk';
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

  //Kontrol ion-alert
  isInputAlertOpen: boolean = false;
  isSuksesAlertOpen: boolean = false;
  pesanSukses: string = '';

  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.produkDetail = this.produkService.getProdukById(id);
    });
  }

  // Buka Alert Prompt saat tombol "Tambah ke Keranjang" diklik 
  bukaInputJumlah() { 
    if (this.produkDetail && this.produkDetail.stok > 0) { 
      this.isInputAlertOpen = true; 
    } 
  }

  // Input konfigurasi untuk Alert Prompt 
  get alertInputs() { 
    return [ 
      { 
        name: 'jumlah', 
        type: 'number', 
        placeholder: 'Masukkan jumlah unit', 
        value: 1, 
        min: 1, 
        max: this.produkDetail ? this.produkDetail.stok : 1 
      } 
    ]; 
  }

  // Tombol untuk Alert Prompt 
  get alertButtons() {
    return [
      {
        text: 'Batal',
        role: 'cancel',
        handler: () => {
          this.isInputAlertOpen = false;
        }
      }, {
        text: 'Konfirmasi',
        handler: (data: any) => {
          const qty = Number(data.jumlah);
          if (this.produkDetail && qty > 0 && qty <= this.produkDetail.stok) { 
            
            this.cartService.addToCart(this.produkDetail, qty); 
            
            this.isInputAlertOpen = false; 
            this.pesanSukses = `${qty}x ${this.produkDetail.nama} berhasil ditambahkan ke keranjang!`;
            this.isSuksesAlertOpen = true; 
            return true; 
          } else { 
             
            return false; 
          }
        }
      }
    ];
  }
}
