import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    public theme: Theme, 
    private router: Router      
  ) {}

  
  get isLoginPage(): boolean { 
    return this.router.url.includes('/login') || 
           this.router.url === '/' || 
           this.router.url.includes('/logout'); 
  }
}