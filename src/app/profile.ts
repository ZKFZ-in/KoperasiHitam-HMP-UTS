import { Injectable } from '@angular/core';

export interface Profile {
    id: number;
    namaToko: string;
    alamat: string;
    noTelepon: string;
    jamOperasional: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private profile: Profile[] = [{
        id: 1,
        namaToko: 'Koperasi Hitam',
        alamat: 'Jl. Raya No 123, Surabaya',
        noTelepon: '08123456789',
        jamOperasional: '24 Jam'
    }];

    constructor() { }

    updateProfile(id: number, data: Profile) {
        for (let i = 0; i < this.profile.length; i++) {
            if (this.profile[i].id === id) {
                this.profile[i].namaToko = data.namaToko;
                this.profile[i].alamat = data.alamat;
                this.profile[i].noTelepon = data.noTelepon;
                this.profile[i].jamOperasional = data.jamOperasional;
                break;
            }
        }
    }

    getProfile(): Profile[] {
        return this.profile;
    }
}

