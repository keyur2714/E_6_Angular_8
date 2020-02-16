import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceEntryComponent } from './service-entry/service-entry.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about-us' , component : AboutusComponent},
  {path : 'contact-us' , component : ContactusComponent},
  {path : 'serviceEntry' , component : ServiceEntryComponent},
  {path : 'serviceEdit/:id' , component : ServiceEntryComponent},
  {
    path : 'services' , component : ServicesComponent,
    children : [
      {path : 'services/:id' , component : ServiceDetailComponent} 
    ]
  },
  {path : 'services/:id' , component : ServiceDetailComponent},
  {path : 'signin' , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
