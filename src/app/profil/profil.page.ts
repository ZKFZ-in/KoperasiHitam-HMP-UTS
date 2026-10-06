import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../profile';
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

  constructor(private profileService: ProfileService) { }

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
}
