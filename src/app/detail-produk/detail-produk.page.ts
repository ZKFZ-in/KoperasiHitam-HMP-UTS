import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukService } from '../produk';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  produkDetail: Produk | undefined;
  defaultGambar: string = 'assets/icon/favicon.png';
  
  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.produkDetail = this.produkService.getProdukById(id);
    });
  }

}
