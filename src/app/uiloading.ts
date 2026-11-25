import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

/**
 * Helper untuk loading indicator dan pesan error, dipakai semua halaman
 * yang memanggil API supaya perilakunya seragam.
 */
@Injectable({ providedIn: 'root' })
export class UiService {
  private loadingAktif = 0;
  private loadingPromise?: Promise<HTMLIonLoadingElement>;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  // Aman dipanggil berkali-kali (mis. 2 request sekaligus): overlay hanya satu,
  // dan baru hilang setelah semua request selesai.
  tampilLoading(pesan: string = 'Memuat data...') {
    this.loadingAktif++;
    if (this.loadingAktif === 1) {
      this.loadingPromise = this.loadingCtrl
        .create({ message: pesan })
        .then(async l => { await l.present(); return l; });
    }
  }

  async sembunyiLoading() {
    this.loadingAktif = Math.max(0, this.loadingAktif - 1);
    if (this.loadingAktif === 0 && this.loadingPromise) {
      const p = this.loadingPromise;
      this.loadingPromise = undefined;
      const l = await p; // menunggu kalau overlay belum selesai dibuat
      await l.dismiss();
    }
  }

  pesanError(err: any): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
      }
      if (err.error && typeof err.error.message === 'string') {
        return err.error.message; // pesan dari PHP, mis. "Stok Beras 5kg tidak mencukupi."
      }
      return `Terjadi kesalahan pada server (kode ${err.status}).`;
    }
    return 'Terjadi kesalahan yang tidak terduga.';
  }

  async tampilError(err: any) {
    const toast = await this.toastCtrl.create({
      message: this.pesanError(err),
      duration: 4000,
      color: 'danger',
      position: 'bottom'
    });
    await toast.present();
  }
}
