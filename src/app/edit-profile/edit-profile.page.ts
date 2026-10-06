import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ProfileService, Profile } from '../profile';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false,
})
export class EditProfilePage {
  profileInput: Profile = {
    id: 0,
    namaToko: '',
    alamat: '',
    noTelepon: '',
    jamOperasional: ''
  }
  profileId: number = 0;

  constructor(private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.profileId = Number(this.route.snapshot.paramMap.get('id'));
  }

  updateProfile()
  {
    this.profileService.updateProfile(this.profileId, this.profileInput);
    this.router.navigate(['/profil']);
  }
  
  ionViewDidEnter() {
    this.fadeInProduk();
  }
  
  // 4. Fungsi pembuat animasi Fade In[cite: 1]
  fadeInProduk() {
    const produkElement = document.querySelector('#myEditProfile') as HTMLElement; //[cite: 1]

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
