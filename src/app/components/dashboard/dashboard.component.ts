import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { PaymentService } from 'src/app/payment.service';
const DAILY_LIMIT = 20000;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  option = new FormControl('');
  amount = new FormControl('',[Validators.max(20000)]);
  accNum = new FormControl('');
  selected: any;
  constructor(private service:PaymentService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("token","")
  }
  onSelect() {
    this.selected = true;
  }
  onContinue(){
    let data=this.service.getHistory();
    let sum=this.amount.value;
    console.log(data)
    for (let index = 0; index < data.length; index++) {
      sum+=data[index].amount;
    }
    
    let postData={
      amount:this.amount.value,
      accountNumber:this.accNum.value
    }
    
    if(sum<=DAILY_LIMIT){
      this.service.pay(postData);
      this.openSnackBar("Transaction Successfull")
    }
    else{
      this.openSnackBar("Daily Limit Exceed");
    }
  }
 
  openSnackBar(message) {
    this._snackBar.open(message, "Dismiss", {
      duration: 2000,
    });
  }
  viewTransaction(){
    this.router.navigate(['view'])
  }

}
