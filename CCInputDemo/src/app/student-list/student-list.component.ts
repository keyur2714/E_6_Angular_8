import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  headerList : string[] = ["Name","Mobile No"];
  columnList : string[] = ["name","mobileNo"];
  studentList : Student[] = [];

  constructor() { }

  ngOnInit() {
    let student1 = new Student(1,"keyur","7387029671","keyurjava27@gmail.com");
    let student2 = new Student(2,"denish","7387029672","denihjava27@gmail.com");
    let student3 = new Student(3,"vinit","7387029673","vinitjava27@gmail.com");
    let student4 = new Student(4,"ravi","7387029674","ravijava27@gmail.com");

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
    this.studentList.push(student4);
  }

}
