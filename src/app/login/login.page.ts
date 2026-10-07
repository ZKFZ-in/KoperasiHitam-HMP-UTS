import { Component, OnInit } from '@angular/core';
import { Animasi } from '../animasi';
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
    private animasi: Animasi
  ) { }

  ngOnInit() {
    const profil = this.profileService.getProfile();
    if (profil && profil.length > 0) {
      this.namaToko = 'Toko ' + profil[0].namaToko;
    }
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('#myLogin');
  }

}
