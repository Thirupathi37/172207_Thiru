import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { LoginPojo } from '../login/LoginPojo';
import { MyaccountPojo } from './MyaccountPojo';
import { Register } from '../register/register';
import { AddvehiclePojo } from '../add-vehicle/AddvehiclePojo';
import { MemberShipPojo } from '../member-ship/MemberShipPojo';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  result: MyaccountPojo[];
  loginresult:LoginPojo[];
  registerresult:Register[];
  vehicleresult:AddvehiclePojo[];
  membershipresult:MemberShipPojo[];

  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  login:LoginPojo=new LoginPojo();
  
  ngOnInit() {
    
   this.myAccountDetails();
   this.myLoginDetails();
   this.myRegistrationDetails();
   this.myVehicleDetails();
  //  this.myMembershipDetails();
  }
  

  myAccountDetails()
  {
    
    //console.log(this.login.email);
    this.userService.getUserByEmail().subscribe((response) =>{ 
    
    this.result=response as MyaccountPojo[];
  }); 
 }

 myLoginDetails()
 {
   
   //console.log(this.login.email);
   this.userService.getUserByEmail1().subscribe((data)=>{
     console.log(data);
    this.loginresult=data as LoginPojo[];
   });
   
 }
   myRegistrationDetails()
   {
     
     //console.log(this.login.email);
     this.userService.getUserByEmail2().subscribe((data)=>{
       console.log(data);
      this.registerresult=data as Register[];
     });
}

myVehicleDetails()
   {
     
     //console.log(this.login.email);
     this.userService.getUserByEmail3().subscribe((data)=>{
      // console.log(data);
      this.vehicleresult=data as AddvehiclePojo[];
     });
}


// myMembershipDetails() 
// {
//   this.userService.getMembershipDetails().subscribe((data)=>{
//      console.log(data);
//     this.membershipresult=data as MemberShipPojo[];
//    });
// }

 read()
 {
   return localStorage.getItem('Email');
 }

}