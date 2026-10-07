import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../profile';
import {Animasi} from '../animasi';

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
    private animasi: Animasi,
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
    this.animasi.fadeInHalaman('.ion-page');
  }

}
