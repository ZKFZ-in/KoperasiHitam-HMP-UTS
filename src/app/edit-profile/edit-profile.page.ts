import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ProfileService, Profile } from '../profile';

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
  ) { }

  ngOnInit() {
    this.profileId = Number(this.route.snapshot.paramMap.get('id'));
  }

  updateProfile()
  {
    this.profileService.updateProfile(this.profileId, this.profileInput);
    this.router.navigate(['/profil']);
  }

}
