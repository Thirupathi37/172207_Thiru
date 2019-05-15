import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  { LoginPojo } from './LoginPojo'
import { RegisterService } from '../register.service';
import { Register } from '../register/register';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title:"Quickr Login Page"
  //loginPojo: LoginPojo;
  response:any
  value:any;
  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  regForm: FormGroup;
  submitted:boolean=false
  loginAccount:LoginPojo=new LoginPojo();
  registerAccount:Register=new Register();
  ngOnInit() {
    this.regForm = this.fb.group({
      // name: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]],
      /* email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] ], */
      email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      // phonenumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[6-9]\\d{9}')]],
      password:['',[ Validators.required,Validators.maxLength(15),Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')] ]
      
   });
  }
  onLogin(){
    this.submitted=true;
  
     
      this.userService.validateUser(this.loginAccount)
      .subscribe((response) =>
      {
       console.log(response)
        this.response=response;
        if(response!=null)
        {
          localStorage.setItem('Role','customer');
          localStorage.setItem('Email',this.loginAccount.email);
          this.route.navigateByUrl("addVehicle");
        }
        else{
          this.route.navigateByUrl("login");
        } 
        this.value=response;
        this.userService.userDetails(this.value.email);
        console.log(response), error => console.log(error)});
      /* this.loginAccount=new LoginAccount(); */
     // console.log(this.loginAccount)
     }



}
