import { Injectable } from '@angular/core';
import { Produk } from './produk'; // Sesuaikan path interface Produk kamu

export interface CartItem {
  produk: Produk;
  jumlah: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() { }

  getCart(): CartItem[] {
    return this.items;
  }

  // Tambah produk ke keranjang
  addToCart(produk: Produk) {
    const existingIndex = this.items.findIndex(item => item.produk.id === produk.id);
    if (existingIndex > -1) {
      if (this.items[existingIndex].jumlah < produk.stok) {
        this.items[existingIndex].jumlah++;
      }
    } else {
      this.items.push({ produk, jumlah: 1 });
    }
  }

  // Ubah jumlah item (+1 / -1)
  updateQuantity(productId: number, delta: number) {
    const item = this.items.find(i => i.produk.id === productId);
    if (item) {
      item.jumlah += delta;
      if (item.jumlah <= 0) {
        this.removeFromCart(productId);
      }
    }
  }

  // Hapus item dari keranjang
  removeFromCart(productId: number) {
    this.items = this.items.filter(i => i.produk.id !== productId);
  }

  // Hitung total belanjaan
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.produk.hargaJual * item.jumlah), 0);
  }

  // Bersihkan keranjang setelah checkout
  clearCart() {
    this.items = [];
  }
}