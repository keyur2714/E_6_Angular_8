import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about-us' , component : AboutusComponent},
  {path : 'contact-us' , component : ContactusComponent},
  {path : 'services' , component : ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
