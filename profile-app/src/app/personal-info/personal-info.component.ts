import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  person : Person = new Person();
  // person = {
  //   name : 'keyur',
  //   dob  : '27/12/1986',
  //   mobileNo : '7387029671',
  //   email : 'keyurjava27@gmail.com',
  //   gender : 'Male',
  //   address : 'Pimple Saudagar,Pune-411027'
  // };

  constructor() { }

  ngOnInit() {
    this.person.name = 'keyur';
    this.person.dob = '27/12/1986';
    this.person.gender = 'Male';
    this.person.email = 'keyurjava27@gmail.com';    
    this.person.mobileNo = '7387029671';
    this.person.address = 'Pimple Saudagar,Pune-411027';
  }

}
