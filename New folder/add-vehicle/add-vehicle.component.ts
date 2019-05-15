import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../register.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddvehiclePojo } from './AddvehiclePojo';


@Component({
  selector: 'app-register',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  // Vehiclenumber:string
  // Brand:string
  // VehicleModel:string
 
  addvpojo: AddvehiclePojo = new AddvehiclePojo();
  submitted=false;
  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  vehicleForm:FormGroup
  //login:LoginPojo=new LoginPojo();
  //Register:RegisterPojo=new RegisterPojo();
  ngOnInit() {
    
    this.vehicleForm=this.fb.group(
      {
        
         vehiclenumber:[' ',[ Validators.required] ],
         brand:[' ',[Validators.required]],
         vehicleModel:[' ',[Validators.required]]
        
      
      })  }

  save() {
    console.log("in save")
    console.log(this.addvpojo)
    this.addvpojo.email=this.userService.result;
    console.log(this.addvpojo)
    this.userService.addVehicle(this.addvpojo)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.addvpojo= new AddvehiclePojo();
    this.route.navigateByUrl("membership");
  }

  onAdd() {
    this.submitted = true;
    console.log("onadd")
    this.save();
   // this.route.navigateByUrl("login")

  }
 
}
