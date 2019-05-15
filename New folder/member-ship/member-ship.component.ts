import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { MemberShipPojo } from './MemberShipPojo';

@Component({
  selector: 'app-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.css']
})
export class MemberShipComponent implements OnInit {
  submitted:any=true
  membershipresult:MemberShipPojo[];


  constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
  memForm:FormGroup
  member:MemberShipPojo=new MemberShipPojo();
  data:any
  ngOnInit() 
  {
    this.memForm = this.fb.group({
      membership: ['', [Validators.required ]],
  
      
   });
  }

  onMemberShip(){
    this.submitted=false
    console.log("in membership() method")
    console.log(this.member)
    localStorage.setItem('Membership',this.member.membership);
    this.member.email=this.userService.result;
      this.userService.memberShip(this.member.membership)
      .subscribe((data) => this.data=data, error => console.log(error));
    
      this.route.navigateByUrl("bookservice")
}
}
 