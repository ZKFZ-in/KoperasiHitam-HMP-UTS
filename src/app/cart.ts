import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Produk } from './produk';
import { TransactionService, Transaksi } from './transaction';
import { UiService } from './uiloading';

export interface CartItem {
  produk: Produk;
  jumlah: number;
}

export interface HasilCheckout {
  berhasil: boolean;
  pesan?: string;
  transaksi?: Transaksi;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor(
    private transactionService: TransactionService,
    private ui: UiService
  ) { }

  getCart(): CartItem[] {
    return this.items;
  }
  
  addToCart(produk: Produk, qty: number = 1) {
    const existingIndex = this.items.findIndex(item => item.produk.id === produk.id);
    if (existingIndex > -1) {
      const totalQty = this.items[existingIndex].jumlah + qty;
      this.items[existingIndex].jumlah = Math.min(totalQty, produk.stok);
    } else {
      this.items.push({ 
        produk: {...produk}, 
        jumlah: Math.min(qty, produk.stok) 
      });
    }
  }
  
  updateQuantity(productId: number, delta: number) {
    const item = this.items.find(i => i.produk.id === productId);
    if (item) {
      item.jumlah += delta;
      if (item.jumlah <= 0) {
        this.removeFromCart(productId);
      }
    }
  }
  
  removeFromCart(productId: number) {
    this.items = this.items.filter(i => i.produk.id !== productId);
  }
 
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.produk.hargaJual * item.jumlah), 0);
  }
  
  clearCart() {
    this.items = [];
  }
    
  // Pemeriksaan stok, pengurangan stok, dan penyimpanan transaksi sekarang dilakukan server.
  // Error (stok kurang, offline, dll) diubah menjadi HasilCheckout supaya halaman tinggal menampilkannya.
  checkout(): Observable<HasilCheckout> {
    if (this.items.length === 0) {
      return of({ berhasil: false, pesan: 'Keranjang masih kosong.' });
    }

    return this.transactionService.addTransaction(this.items).pipe(
      map(res => {
        this.clearCart();
        return { berhasil: true, transaksi: res.transaksi } as HasilCheckout;
      }),
      catchError(err => of({ berhasil: false, pesan: this.ui.pesanError(err) } as HasilCheckout))
    );
  }
}
