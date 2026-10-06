import { Component, OnInit } from '@angular/core';
import { Produk, ProdukService } from '../produk';
import { AnimationController } from '@ionic/angular';

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
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.loadProduk();
  }

  ionViewWillEnter() {
    this.loadProduk();
  }

  loadProduk() {
    this.daftarProduk = this.produkService.getProduk();
  }

  // 3\. Panggil fungsi animasi di ionViewDidEnter() [1, 4] 
  ionViewDidEnter() {
    this.fadeInProduk();
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
  // 4. Fungsi pembuat animasi Fade In[cite: 1]
  fadeInProduk() {
    const produkElement = document.querySelector('#myProduk') as HTMLElement; //[cite: 1]

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