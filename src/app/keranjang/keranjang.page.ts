import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart';
import { TransactionService } from '../transaction';
import { ProdukService } from '../produk';
import { ToastController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false
})
export class KeranjangPage implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private produkService: ProdukService,
    private toastController: ToastController,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  // Memastikan isi keranjang selalu terbaru setiap kali halaman dibuka
  ionViewWillEnter() {
    this.cartItems = this.cartService.getCart();
  }

  get totalBelanja(): number {
    return this.cartService.getTotalPrice();
  }

  tambahJumlah(item: CartItem) {
    if (item.jumlah < item.produk.stok) {
      this.cartService.updateQuantity(item.produk.id, 1);
    } else {
      this.presentToast('Jumlah melebihi stok yang tersedia!');
    }
  }

  kurangJumlah(item: CartItem) {
    this.cartService.updateQuantity(item.produk.id, -1);
    this.cartItems = this.cartService.getCart();
  }

  hapusItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();
  }

  async konfirmasiTransaksi() {
    if (this.cartItems.length === 0) {
      this.presentToast('Keranjang belanja masih kosong!');
      return;
    }

    const alert = await this.alertController.create({
      header: 'Konfirmasi Transaksi',
      message: `Total Pembayaran: Rp ${this.totalBelanja.toLocaleString('id-ID')}. Lanjutkan simpan transaksi?`,
      buttons: [
        { text: 'Batal', role: 'cancel' },
        {
          text: 'Konfirmasi',
          handler: () => {
            this.prosesCheckout();
          }
        }
      ]
    });

    await alert.present();
  }

  async prosesCheckout() {
    // 1. Kurangi stok produk
    this.cartItems.forEach(item => {
      this.produkService.reduceStock(item.produk.id, item.jumlah);
    });

    // 2. Simpan transaksi ke riwayat
    this.transactionService.addTransaction(this.cartItems, this.totalBelanja);

    // 3. Kosongkan keranjang
    this.cartService.clearCart();
    this.cartItems = [];

    // 4. Pesan sukses & kembali ke halaman produk
    await this.presentToast('Transaksi berhasil dikonfirmasi dan disimpan ke riwayat!');
    this.navCtrl.navigateBack('/produk');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    await toast.present();
  }
}
