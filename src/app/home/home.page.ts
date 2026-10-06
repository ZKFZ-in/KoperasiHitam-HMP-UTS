import { Component } from '@angular/core';
import { ProdukService } from '../produk';
import { TransactionService } from '../transaction';
import { AnimationController } from '@ionic/angular';

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
    private animationCtrl: AnimationController
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
  }

  ionViewDidEnter() {
    this.fadeInProduk();
  }
  
  // 4. Fungsi pembuat animasi Fade In[cite: 1]
  fadeInProduk() {
    const produkElement = document.querySelector('#myHome') as HTMLElement; //[cite: 1]

    if (produkElement) {
      const animation = this.animationCtrl
        .create() //[cite: 1]
        .addElement(produkElement) //[cite: 1]
        .duration(500) // Durasi animasi dalam milidetik (misal 1.5 detik)[cite: 1]
        .iterations(1) // Jumlah pengulangan[cite: 1]
        .keyframes([ // Pengaturan opacity secara bertahap dari 0 hingga 1[cite: 1]
          { offset: 0, opacity: '0' },
          { offset: 0.2, opacity: '0.2' },
          { offset: 0.4, opacity: '0.4' },
          { offset: 0.6, opacity: '0.6' },
          { offset: 0.8, opacity: '0.8' },
          { offset: 1, opacity: '1' }
        ]);

      animation.play(); //[cite: 1]
    }
  }
}