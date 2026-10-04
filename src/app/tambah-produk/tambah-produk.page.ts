import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false
})
export class TambahProdukPage {
  produkInput: Produk = {
    id: 0,
    nama: '',
    hargaBeli: 0,
    hargaJual: 0,
    stok: 0,
    gambar: '',
    kategori: '',
    deskripsi: ''
  };

  errorNama: string = '';
  errorHargaBeli: string = '';
  errorHargaJual: string = '';
  errorStok: string = '';

  constructor(
    private produkService: ProdukService,
    private router: Router
  ) {}

  validasiNama() {
    if (!this.produkInput.nama || this.produkInput.nama.trim() === '') {
      this.errorNama = 'Nama produk wajib diisi';
    } else {
      this.errorNama = '';
    }
  }

  validasiHargaBeli() {
    if (this.produkInput.hargaBeli === null || isNaN(this.produkInput.hargaBeli)) {
      this.errorHargaBeli = 'Harga beli wajib diisi dengan angka';
    } else if (this.produkInput.hargaBeli <= 0) {
      this.errorHargaBeli = 'Harga beli harus lebih besar dari 0';
    } else {
      this.errorHargaBeli = '';
    }
  }

  validasiHargaJual() {
    if (this.produkInput.hargaJual === null || isNaN(this.produkInput.hargaJual)) {
      this.errorHargaJual = 'Harga jual wajib diisi dengan angka';
    } else if (this.produkInput.hargaJual <= 0) {
      this.errorHargaJual = 'Harga jual harus lebih besar dari 0';
    } else {
      this.errorHargaJual = '';
    }
  }

  validasiStok() {
    if (this.produkInput.stok === null || isNaN(this.produkInput.stok)) {
      this.errorStok = 'Stok wajib diisi dengan angka';
    } else if (this.produkInput.stok < 0) {
      this.errorStok = 'Stok tidak boleh negatif';
    } else {
      this.errorStok = '';
    }
  }

  validasiSemua(): boolean {
    this.validasiNama();
    this.validasiHargaBeli();
    this.validasiHargaJual();
    this.validasiStok();

    if (this.errorNama !== '' || this.errorHargaBeli !== '' ||
        this.errorHargaJual !== '' || this.errorStok !== '') {
      return false;
    } else {
      return true;
    }
  }

  simpanProduk() {
    if (!this.validasiSemua()) {
      return;
    }

    this.produkService.addProduk(this.produkInput);
    this.router.navigate(['/produk']);
  }
}