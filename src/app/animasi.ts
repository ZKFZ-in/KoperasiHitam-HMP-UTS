import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable(
    { providedIn: 'root' }
)
export class Animasi {

    constructor(private animationCtrl: AnimationController) { }

    fadeInHalaman(selector: string) {
        const halaman = document.querySelector(selector) as HTMLElement;
        if (halaman) {
            const animasi = this.animationCtrl.create()
                .addElement(halaman)
                .duration(500)
                .iterations(1) 
                .keyframes([ 
                    { offset: 0, opacity: '0' },
                    { offset: 0.2, opacity: '0.2' },
                    { offset: 0.4, opacity: '0.4' },
                    { offset: 0.6, opacity: '0.6' },
                    { offset: 0.8, opacity: '0.8' },
                    { offset: 1, opacity: '1' }
                ]);
                animasi.play();
            
        }
    }

    refreshBerputar(selector: string)
    {
        const logo = document.querySelector(selector) as HTMLElement;
        if (logo)
        {
            const animasi = this.animationCtrl.create()
                .addElement(logo)
                .duration(500)
                .iterations(1)
                .keyframes([
                    { offset: 0, transform: 'rotate(0deg)' },
                    { offset: 1, transform: 'rotate(360deg)' }
                ])
            animasi.play();
        }
    }
}
