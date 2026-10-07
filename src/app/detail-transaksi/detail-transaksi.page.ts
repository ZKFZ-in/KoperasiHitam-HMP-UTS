import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService, Transaksi } from '../transaction';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
  standalone: false,
})
export class DetailTransaksiPage implements OnInit {
  selectedTransaksi: Transaksi | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.selectedTransaksi = this.transactionService.getTransaksiById(id);
    });
  }
}
