import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Register } from './register';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) {}
  regForm: FormGroup;
  submitted:boolean=false;
   response:any;
  register:Register=new Register();
  ngOnInit() {

    this.regForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(3) ]],
      /* email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] ], */
      email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      phonenumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[6-9]\\d{9}')]],
      password:['',[ Validators.required,Validators.maxLength(15),Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')] ]
      
   });
  }

  onRegiter(){
    this.submitted=true;
      console.log("in register() method")
      console.log(this.register)
      console.log(this.register)
      this.userService.createUser(this.register).subscribe((response) =>{ 
            this.response=response
            console.log(this.response.password)});
            this.route.navigateByUrl("login");
       // this.userAccount = new UserAccount();
        //console.log(this.userAccount)
    
    
     }
    
     onLogin(){
      console.log(this.response.name)
      this.route.navigateByUrl("login");
   
}
}
