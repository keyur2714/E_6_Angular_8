import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  educationList : Education[] = [];
  
  constructor() { }

  ngOnInit() {
    let education1 = new Education(1,'S.S.C',2001,'Dist');
    let education2 = new Education(2,'H.S.C',2003,'First');
    let education3 = new Education(3,'B-Tech',2007,'Dist');
    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
    //this.educationList = [education1,education2,education3];
  }

}
