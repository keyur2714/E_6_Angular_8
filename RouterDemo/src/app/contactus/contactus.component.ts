import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name : string = '';
  mobileNo : string = '';
  email : string = '';

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        this.name = queryParamMap.get('name');
        this.mobileNo = queryParamMap.get('mobileNo');
        this.email = queryParamMap.get('email');
      }
    )
    // this.activatedRoute.queryParams.subscribe(
    //   (queryParams)=>{
    //     this.name = queryParams.name;
    //     this.mobileNo = queryParams.mobileNo;
    //     this.email = queryParams.email;
    //   }
    // )
  }

}
