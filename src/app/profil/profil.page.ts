import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../profile';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  profile: Profile = {
    id: 0,
    namaToko: '', 
    alamat: '',
    noTelepon: '',
    jamOperasional: ''
  }

  constructor(
    private profileService: ProfileService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  ionViewWillEnter() {
    this.loadProfile();
  }

  loadProfile()
  {
    this.profile = this.profileService.getProfile()[0];
  }

  ionViewDidEnter() {
    this.fadeInProduk();
  }
  
  // 4. Fungsi pembuat animasi Fade In[cite: 1]
  fadeInProduk() {
    const produkElement = document.querySelector('#myProfile') as HTMLElement; //[cite: 1]

    if (produkElement) {
      const animation = this.animationCtrl
        .create() //[cite: 1]
        .addElement(produkElement) //[cite: 1]
        .duration(500) // Durasi animasi dalam milidetik (misal 1.5 detik)[cite: 1]
        .iterations(1) // Jumlah pengulangan[cite: 1]
        .keyframes([ // Pengaturan opacity secara bertahap dari 0 hingga 1[cite: 1]
          { offset: 0, opacity: '0' },
          { offset: 0.2, opacity: '0.2' },
          { offset: 0.4, opacity: '0.4' },
          { offset: 0.6, opacity: '0.6' },
          { offset: 0.8, opacity: '0.8' },
          { offset: 1, opacity: '1' }
        ]);

      animation.play(); //[cite: 1]
    }
  }
}
