import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { SupervisorPojo } from './SupervisorPojo';

@Component({
  selector: 'app-supervisorlogin',
  templateUrl: './supervisorlogin.component.html',
  styleUrls: ['./supervisorlogin.component.css']
})
export class SupervisorloginComponent implements OnInit {
  submitted: boolean;

  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  regForm: FormGroup;
  response:any;
  loginAccount:SupervisorPojo=new SupervisorPojo();
 // register:RegisterPojo=new RegisterPojo();
  ngOnInit() {
    this.regForm=this.fb.group(
{
  email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
  password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6)]]
  
})
  }
  onSuperviserLogin(){
    this.submitted=true;
    console.log(this.loginAccount)
     console.log("thiru")
      this.userService.validateSupervisor(this.loginAccount)
      .subscribe((response) =>
      {

        this.response=response;
        /* if(response==true)
        {
          console.log(response)
          this.route.navigateByUrl("addvehicle");
        }
        else{
          this.route.navigateByUrl("register");
        } */
        console.log(response), error => console.log(error)});
      /* this.loginAccount=new LoginAccount(); */
     // console.log(this.loginAccount)
     this.route.navigateByUrl("dailytasks");
      
     }


    }