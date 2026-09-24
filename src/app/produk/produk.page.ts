import { Component, OnInit } from '@angular/core';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false
})
export class ProdukPage implements OnInit {
  daftarProduk: Produk[] = [];
  isModalOpen: boolean = false;
  selectedProdukId: number | null = null;
  judulModal: string = 'Tambah Produk';

  
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

  
  errorMessage: string = '';

  constructor(private produkService: ProdukService) {}

  ngOnInit() {
    this.loadProduk();
  }

  loadProduk() {
    this.daftarProduk = this.produkService.getProduk();
  }

  openModalTambah() {
    this.selectedProdukId = null;
    this.judulModal = 'Tambah Produk';
    this.errorMessage = '';

    
    this.produkInput = {
      id: 0,
      nama: '',
      hargaBeli: 0,
      hargaJual: 0,
      stok: 0,
      gambar: '',
      kategori: '',
      deskripsi: ''
    };

    this.isModalOpen = true;
  }

  openModalEdit(produk: Produk) {
    this.selectedProdukId = produk.id;
    this.judulModal = 'Edit Produk';
    this.errorMessage = '';

    let gambarVal = '';
    if (produk.gambar) {
      gambarVal = produk.gambar;
    }

    let kategoriVal = '';
    if (produk.kategori) {
      kategoriVal = produk.kategori;
    }

    let deskripsiVal = '';
    if (produk.deskripsi) {
      deskripsiVal = produk.deskripsi;
    }

    
    this.produkInput = {
      id: produk.id,
      nama: produk.nama,
      hargaBeli: produk.hargaBeli,
      hargaJual: produk.hargaJual,
      stok: produk.stok,
      gambar: gambarVal,
      kategori: kategoriVal,
      deskripsi: deskripsiVal
    };

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  simpanProduk() {
    this.errorMessage = '';

    
    if (this.produkInput.nama === '' || this.produkInput.nama === null) {
      this.errorMessage = 'Nama produk wajib diisi!';
      return;
    }

    if (this.produkInput.hargaBeli <= 0 || this.produkInput.hargaBeli === null) {
      this.errorMessage = 'Harga beli harus lebih besar dari 0!';
      return;
    }

    if (this.produkInput.hargaJual <= 0 || this.produkInput.hargaJual === null) {
      this.errorMessage = 'Harga jual harus lebih besar dari 0!';
      return;
    }

    if (this.produkInput.stok < 0 || this.produkInput.stok === null) {
      this.errorMessage = 'Stok tidak boleh negatif!';
      return;
    }

    
    if (this.selectedProdukId === null) {
      this.produkService.addProduk(this.produkInput);
    } else {
      this.produkService.updateProduk(this.selectedProdukId, this.produkInput);
    }

    this.loadProduk();
    this.closeModal();
  }
}