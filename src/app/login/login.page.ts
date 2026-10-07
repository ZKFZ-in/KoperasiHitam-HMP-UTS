import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ProfileService } from '../profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  namaToko: string = 'Makmur Jaya';

  constructor(
    private profileService: ProfileService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    const profil = this.profileService.getProfile();
    if (profil && profil.length > 0) {
      this.namaToko = 'Toko ' + profil[0].namaToko;
    }
  }

  ionViewDidEnter() {
    this.fadeInProduk();
  }

  // 4. Fungsi pembuat animasi Fade In
  fadeInProduk() {
    const produkElement = document.querySelector('#myLogout') as HTMLElement;

    if (produkElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(produkElement)
        .duration(500) // Durasi animasi dalam milidetik (misal 1.5 detik)
        .iterations(1) // Jumlah pengulangan
        .keyframes([ // Pengaturan opacity secara bertahap dari 0 hingga 1
          { offset: 0, opacity: '0' },
          { offset: 0.2, opacity: '0.2' },
          { offset: 0.4, opacity: '0.4' },
          { offset: 0.6, opacity: '0.6' },
          { offset: 0.8, opacity: '0.8' },
          { offset: 1, opacity: '1' }
        ]);

      animation.play();
    }
  }
}
