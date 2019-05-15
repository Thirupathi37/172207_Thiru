import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { BookwashPojo } from './BookwashPojo';

@Component({
  selector: 'app-bookwashservice',
  templateUrl: './bookservice.component.html',
  styleUrls: ['./bookservice.component.css']
})
export class BookwashserviceComponent implements OnInit {

  
 
  bookpojo: BookwashPojo = new BookwashPojo();
  submitted = false;
  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  bookForm:FormGroup
  //login:LoginPojo=new LoginPojo();
  //Register:RegisterPojo=new RegisterPojo();
  ngOnInit() {
    
    this.bookForm=this.fb.group(
      {
        //email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
        location:['',[ Validators.required] ],
        date:['',[Validators.required]],
        
      })  }

  save() {
    console.log("in save")
    console.log(this.bookpojo)
    this.bookpojo.email=this.userService.result;
    this.userService.bookservice(this.bookpojo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookpojo= new BookwashPojo();
   
  }

  onAdd() {
    this.submitted = true;
    console.log("onadd")
    this.save();
     this.route.navigateByUrl("payment")

  }
 
}
