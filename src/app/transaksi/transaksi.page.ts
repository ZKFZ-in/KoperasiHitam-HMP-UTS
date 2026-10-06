import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaksi} from '../transaction';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  daftarTransaksi: Transaksi[] = [];

  // Pilihan Sorting
  sortOptions: string = 'terbaru';

  //kontrol modal detail transaksi
  isDetailModalOpen = false;
  selectedTransaksi: Transaksi | undefined;

  constructor(
    private transactionService: TransactionService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.daftarTransaksi = this.transactionService.getTransactions();
  }

  //ionViewWillEnter untuk memastikan daftar transaksi 
  //selalu terbaru setiap kali Tab Transaksi dibuka
  ionViewWillEnter() {
    this.daftarTransaksi = this.transactionService.getTransactions();
  }

  //Sorting daftar transaksi berdasarkan pilihan user
  get listTransaksiSorted(): Transaksi[] {
    return [...this.daftarTransaksi].sort((a, b) => {
      const timeA = new Date(a.tanggal).getTime();
      const timeB = new Date(b.tanggal).getTime();

      if (this.sortOptions === 'terbaru') {
        return timeB - timeA;
      } else if (this.sortOptions === 'terlama') {
        return timeA - timeB;
      } else if (this.sortOptions === 'termahal') {
        return b.total - a.total;
      } else if (this.sortOptions === 'termurah') {
        return a.total - b.total;
      }
      return 0;
    });
  }

  //buka modal detail transaksi saat salah satu transaksi dipilih
  bukaDetail(transaksi: Transaksi) {
    this.selectedTransaksi = transaksi;
    this.isDetailModalOpen = true;
  }

  //tutup modal detail transaksi
  tutupDetail() {
    this.isDetailModalOpen = false;
    this.selectedTransaksi = undefined;
  }

  ionViewDidEnter() {
    this.fadeInProduk();
  }
  
  // 4. Fungsi pembuat animasi Fade In[cite: 1]
  fadeInProduk() {
    const produkElement = document.querySelector('#my') as HTMLElement; //[cite: 1]

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
