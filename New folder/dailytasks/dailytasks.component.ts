import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { DailytasksPojo } from './DailytasksPojo';


@Component({
  selector: 'app-dailytasks',
  templateUrl: './dailytasks.component.html',
  styleUrls: ['./dailytasks.component.css']
})
export class DailytasksComponent implements OnInit {
  

 
    title:"Car wash"
      submitted: boolean=false;
     
      constructor(private fb: FormBuilder,private route:Router,private userService: RegisterService) { }
     logForm: FormGroup;
      results: DailytasksPojo[];
     
 
    // register:RegisterPojo=new RegisterPojo();
      ngOnInit() {
        this.logForm=this.fb.group(
    {
     
    })
   
      }
      onService(){
        this.submitted=true;  
          this.userService.dailytasks()
          .subscribe((response) =>
          {
    
            this.results=response as DailytasksPojo[];
           
            console.log(response), error => console.log(error)});
        
          
     
    
        //  onTask(){
        //   this.submitted=true;  
        //     this.userService.dailytasks1()
        //     .subscribe((response1) =>
        //     {
      
        //       this.results1=response1 as DailytasksPojo1[];
             
        //       console.log(response1), error => console.log(error)});
          
            
        //    }
      
}

}