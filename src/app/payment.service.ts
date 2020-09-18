import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  getHistory(){
    let data=[{
      accountNumber:10000000,
      amount:10000
    },
    {
      accountNumber:10000000,
      amount:0
    },
    {
      accountNumber:5000,
      amount:1000
    }
  ]
  return data
  }
  
  pay(data){
    let value={
      success:true
    }
    return value;
  }
}
