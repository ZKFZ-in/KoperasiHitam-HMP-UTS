import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animasi } from '../animasi';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: false,
})
export class LogoutPage implements OnInit {

  constructor(
    private animasi: Animasi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.animasi.fadeInHalaman('#myLogout');
  }

  prosesLogout() {
    this.router.navigate(['/login']);
  }
}
