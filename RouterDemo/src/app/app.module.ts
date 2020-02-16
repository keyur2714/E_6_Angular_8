import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { CustomServiceService } from './services/custom-service.service';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceEntryComponent } from './service-entry/service-entry.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    ServiceDetailComponent,
    ServiceEntryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CustomServiceService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
