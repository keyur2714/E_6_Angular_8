import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() : void {
    this.loginForm = this.formBuilder.group({
      username : this.formBuilder.control('',Validators.required),
      password : this.formBuilder.control('',Validators.required)
    })
  }

  login() : void{
    let uName = this.loginForm.controls['username'].value;
    let pass = this.loginForm.controls['password'].value;
    this.authenticationService.authenticate(uName,pass).subscribe(
      (user : User)=>{
        if(user !== null && user !== undefined){
          sessionStorage.setItem("currentUser",JSON.stringify(user));
          sessionStorage.setItem("token",user.token);
          this.router.navigate(['home']);
        }else{
          alert("Invalid username or password.");
        }
      }
    )
  }
}
