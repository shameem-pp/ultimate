import { Injectable } from '@angular/core';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
data:Payment[]=[];
  constructor() { }

  getHistory(){
  return this.data;
  }
  
  pay(data:Payment){
    let value={
      success:false
    }
    if(data.amount!=0&&data.accountNumber!=0){
      this.data.push(data)
      value={
        success:true
      }
    }
    return value;
  }
}
