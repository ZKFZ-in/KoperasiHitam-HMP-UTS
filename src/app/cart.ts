import { Injectable } from '@angular/core';
import { Produk, ProdukService } from './produk';
import { TransactionService, Transaksi } from './transaction';

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
    private produkService: ProdukService,
    private transactionService: TransactionService
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

    
  checkout(): HasilCheckout {
    if (this.items.length === 0) {
      return { berhasil: false, pesan: 'Keranjang masih kosong.' };
    }

    
    for (const item of this.items) {
      const produk = this.produkService.getProdukById(item.produk.id);
      if (!produk || produk.stok < item.jumlah) {
        return { berhasil: false, pesan: `Stok ${item.produk.nama} tidak mencukupi.` };
      }
    }

    
    for (const item of this.items) {
      this.produkService.reduceStock(item.produk.id, item.jumlah);
    }

    
    const transaksi = this.transactionService.addTransaction(this.items, this.getTotalPrice());

    
    this.clearCart();

    return { berhasil: true, transaksi };
  }
}