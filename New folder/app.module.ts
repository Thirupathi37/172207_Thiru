import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { AddvehicleComponent } from './add-vehicle/add-vehicle.component';

import { ProfilesComponent } from './profiles/profiles.component';
import { PaymentComponent } from './payment/payment.component';
import { BookwashserviceComponent } from './bookservice/bookservice.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SupervisorloginComponent } from './supervisorlogin/supervisorlogin.component';
import { DailytasksComponent } from './dailytasks/dailytasks.component';
import { AddsupwasherComponent } from './addsupwasher/addsupwasher.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MyaccountComponent } from './myaccount/myaccount.component';
//import { DailytasksComponent } from './dailytasks/dailytasks.component';







@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AboutComponent,
    LoginComponent,
    MemberShipComponent,
    AddvehicleComponent,
    ProfilesComponent,
    PaymentComponent,
    BookwashserviceComponent,
    ContactComponent,
    GalleryComponent,
    SupervisorloginComponent,
    DailytasksComponent,
    AddsupwasherComponent,
    MyaccountComponent,
   
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {path:'register',component:RegisterComponent},
     {path:'about',component:AboutComponent},
     {path:'login',component:LoginComponent},
      {path:'membership',component:MemberShipComponent},
      {path:'addVehicle',component:AddvehicleComponent},
      {path:'profiles',component:ProfilesComponent},
      {path:'payment',component:PaymentComponent},
      {path:'bookservice',component:BookwashserviceComponent},
      {path:'contact',component:ContactComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'supervisor',component:SupervisorloginComponent},
      {path:'dailytasks',component:DailytasksComponent},
      {path:'addsupwasher',component:AddsupwasherComponent},
      {path:'myaccount',component:MyaccountComponent}
    
    
    ]),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
