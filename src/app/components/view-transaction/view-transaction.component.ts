import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/payment.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {
  displayedColumns: string[]=['accountNumber','amount']
  dataSource:any;
  constructor(private service:PaymentService) { }

  ngOnInit(): void {
    this.dataSource=this.service.getHistory();
  }

}
