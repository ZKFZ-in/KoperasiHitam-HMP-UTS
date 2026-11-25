import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UiService } from '../uiloading';
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
    private transactionService: TransactionService,
    private ui: UiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.ui.tampilLoading();
      this.transactionService.getTransaksiById(id)
        .subscribe({
          next: (data) => {
            this.selectedTransaksi = data;
            this.ui.sembunyiLoading();
            this.cdr.markForCheck();
          },
          error: (err) => {
            this.ui.sembunyiLoading();
            this.selectedTransaksi = undefined;
            this.cdr.markForCheck();
            this.ui.tampilError(err);
          }
        });
    });
  }
}
