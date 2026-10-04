import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
  standalone: false
})
export class EditProdukPage implements OnInit {
  produkId: number = 0;

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
    private route: ActivatedRoute,
    private produkService: ProdukService,
    private router: Router
  ) {}

  ngOnInit() {
    this.produkId = Number(this.route.snapshot.paramMap.get('id'));
    this.isiForm();
  }

  isiForm() {
    const produk = this.produkService.getProdukById(this.produkId);

    if (!produk) {
      this.router.navigate(['/produk']);
      return;
    }

    this.produkInput = {
      id: produk.id,
      nama: produk.nama,
      hargaBeli: produk.hargaBeli,
      hargaJual: produk.hargaJual,
      stok: produk.stok,
      gambar: produk.gambar || '',
      kategori: produk.kategori || '',
      deskripsi: produk.deskripsi || ''
    };
  }

  
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

    this.produkService.updateProduk(this.produkId, this.produkInput);
    this.router.navigate(['/produk']);
  }
}