import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PaymentPojo } from './PaymentPojo';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  submitted:any=true
 
  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  payForm:FormGroup
  paypojo:PaymentPojo=new PaymentPojo();
  data:any
  check=false
  
  ngOnInit() 
  {
    this.payForm = this.fb.group({
     // nameoncard:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      nameoncard:['', [Validators.required ]],
      creditcardnumber:['', [Validators.required ]],
      expmonth:['', [Validators.required ]],
      expyear:['', [Validators.required ]],
      cvv:['', [Validators.required ]],
     
   });
  }

  onPayment(){
    this.submitted=false
    
    console.log(this.paypojo)
    this.paypojo.email=this.userService.result;
      this.userService.payment(this.paypojo)
      .subscribe((data) => this.data=data, error => console.log(error));
      //this.route.navigateByUrl("login")
      this.onCheck()
}
onCheck()
{
  this.check=true;
}
}