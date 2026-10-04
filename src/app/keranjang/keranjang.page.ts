import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart';
import { TransactionService } from '../transaction';
import { ProdukService } from '../produk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false
})
export class KeranjangPage implements OnInit {
  cartItems: CartItem[] = [];

  //kontrol ion-alert
  isWarningAlertOpen = false;
  warningMessage= '';
  isConfirmAlertOpen = false;
  isSuccessAlertOpen = false;

  constructor(
    private cartService: CartService,
    private transactionService: TransactionService,
    private produkService: ProdukService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Memastikan isi keranjang selalu terbaru setiap kali halaman dibuka
  ionViewWillEnter() {
    this.refreshCart();
  }

  refreshCart() { 
    this.cartItems = this.cartService.getCart(); 
  }

  get totalBelanja(): number {
    return this.cartService.getTotalPrice();
  }

  get pesanAlert(): string {
    return `Total Pembayaran: Rp ${this.totalBelanja.toLocaleString('id-ID')}. Lanjutkan simpan transaksi?`;
  }

  bukaKonfirmasi() { 
    if (this.cartItems.length > 0) { 
      this.isConfirmAlertOpen = true; 
    } 
  }

  get confirmButtons() { 
    return [ 
      { 
        text: 'Batal', 
        role: 'cancel', 
        handler: () => { 
          this.isConfirmAlertOpen = false; 
        } 
      }, { 
        text: 'Konfirmasi', 
        handler: () => { 
          this.prosesCheckout(); 
        } 
      } 
    ]; 
  }

  tambahJumlah(item: CartItem) {
    if (item.jumlah < item.produk.stok) {
      this.cartService.updateQuantity(item.produk.id, 1);
      this.refreshCart();
    } else {
      this.warningMessage = 'Jumlah melebihi stok yang tersedia!';
      this.isWarningAlertOpen = true;
    }
  }

  kurangJumlah(item: CartItem) {
    this.cartService.updateQuantity(item.produk.id, -1);
    this.refreshCart();
  }

  hapusItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.refreshCart();
  }

  async prosesCheckout() {
    if (this.cartItems.length === 0) return;

    // 1. Kurangi stok produk
    this.cartItems.forEach(item => {
      this.produkService.reduceStock(item.produk.id, item.jumlah);
    });

    // 2. Simpan transaksi ke riwayat
    this.transactionService.addTransaction(this.cartItems, this.totalBelanja);

    // 3. Kosongkan keranjang
    this.cartService.clearCart();
    this.refreshCart();

    // 4. Tampilkan alert sukses
    this.isConfirmAlertOpen = false;
    this.isSuccessAlertOpen = true;
  }

  onSuccessAlertDismiss() {
    this.isSuccessAlertOpen = false;
    this.router.navigate(['/transaksi']);
  }
}
