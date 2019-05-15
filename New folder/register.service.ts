import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginPojo } from './profiles/Profiles';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
 
 
 
 
  private addvehicle = 'http://localhost:8888/addvehicle';
  private loginurl = 'http://localhost:8888/login';
 private baseUrl = 'http://localhost:8888/registration';
 private membership1 = 'http://localhost:8888/membership';
 private payment1 = 'http://localhost:8888/payment';
 private supervisorlogin = 'http://localhost:7878';
 private dailytask1 = 'http://localhost:3322';
 private bookwash = 'http://localhost:8888/bookwashservice';
result:any;
  bookpojo: any;
  supervisor: any;
  value: any;

 constructor(private http: HttpClient) { }

createUser(register: Object): Observable<Object> 
{
  console.log(register)
  return this.http.post(`${this.baseUrl}` + `/add`, register);
}

 validateUser(login: Object): Observable<Object>
 {
  console.log(login)
  console.log(`${this.loginurl}` + `/login`)
  return this.http.post(`${this.loginurl}` + `/login`, login);
 }

 memberShip(membership: string): Observable<Object> 
{
  console.log(membership)
  console.log(`${this.membership1}/` +membership)
  return this.http.get(`${this.membership1}/` +membership);
}

addVehicle(addvpojo: Object): Observable<Object> {
  //throw new Error("Method not implemented.");
  console.log(addvpojo)
  console.log(`${this.addvehicle}` + `/vehicleadd`)
  return this.http.post(`${this.addvehicle}` + `/vehicleadd`, addvpojo);
}

payment(paypojo: Object): Observable<Object>
 {
  console.log(paypojo)
     return this.http.post(`${this.payment1}` + `/payment1`, paypojo);
  }


  bookservice(bookpojo: Object): Observable<Object>
   {
     console.log(bookpojo);
    return this.http.post(`${this.bookwash}` + `/bookWash`, bookpojo);
  }

  validateSupervisor(spojo: Object): Observable<Object>
  {
    console.log("thiru")
    return this.http.post(`${this.supervisorlogin}` + `/supervisor`, spojo);
}
 userDetails(email:string)
 {
this.result=email;
 }

// addUser(register: Object): Observable<Object> 
// {
//   console.log("thiru")
//   console.log(register)
//   return this.http.post(`${this.baseUrl}` + `/add`, register);
// }

  dailytasks():Observable<Object> {
  
    return this.http.get(`${this.dailytask1}` + `/getallusers`);
  }

  getUserByEmail(): Observable<any>{
      
    return this.http.get(`${this.bookwash}` + `/user`+`/all`);
  }
 
  getUserByEmail1():Observable<any>{
      
    return this.http.get(`${this.loginurl}` + `/user`+`/all`);
  }
 
  getUserByEmail2():Observable<any>{
      
    return this.http.get(`${this.baseUrl}` + `/user`+`/all`);
  }
 

  getUserByEmail3():Observable<any>
  {
    return this.http.get(`${this.addvehicle}` + `/user`+`/all`);
  }

  // getMembershipDetails() :Observable<any>
  // {
  //   return this.http.get(`${this.membership1}` + `/user`+`/all`);
  // }

}
