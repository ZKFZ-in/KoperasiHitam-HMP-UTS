import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then(m => m.ProdukPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'detail-produk/:id',
    loadChildren: () => import('./detail-produk/detail-produk.module').then( m => m.DetailProdukPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
  },
  {
    path: 'tambah-produk',
    loadChildren: () => import('./tambah-produk/tambah-produk.module').then( m => m.TambahProdukPageModule)
  },
  {
    path: 'edit-produk/:id',
    loadChildren: () => import('./edit-produk/edit-produk.module').then( m => m.EditProdukPageModule)
  },
  {
    path: 'edit-profile/:id',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'detail-transaksi/:id',
    loadChildren: () => import('./detail-transaksi/detail-transaksi.module').then( m => m.DetailTransaksiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
