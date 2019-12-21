import { Component, OnInit } from '@angular/core';
import { Student } from '../manage-friends/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  message : string = '';
  student : Student = new Student(54,'piyush','9974621212');
  studentList : Student[] = [];
  isUpdate : boolean = false;
  selectedRollNo : number = 0;

  constructor() { }

  ngOnInit() {
    let student1 =  new Student(27,"keyur","7387029671");
    let student2 =  new Student(26,"denish","7387029111");
    let student3 =  new Student(44,"vinit","7387029222");

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
  }

  save() : void{
    let checkExists : number = this.studentList.indexOf(this.studentList.find(stud=>stud.rollNo === this.student.rollNo));    
    if(checkExists === -1){
      this.studentList.push(this.student);
      this.message = "Student Added Successfully.";
    }else{
      this.message = "Student Already Exists with Roll No:"+ `${this.student.rollNo}` + ".";
    }    
  }

  edit(rollNo : number) : void{
   let student = this.studentList.find(stud=>stud.rollNo === rollNo);        
   this.student.rollNo = student.rollNo;
   this.student.name = student.name;
   this.student.mobileNo = student.mobileNo;
   this.selectedRollNo = rollNo;
   this.isUpdate = true;
  }

  update() : void{
    let idx : number = this.studentList.indexOf(this.studentList.find(stud=>stud.rollNo === this.student.rollNo));    
    let temp : Student = new Student();
    temp.rollNo = this.student.rollNo;
    temp.name = this.student.name;
    temp.mobileNo = this.student.mobileNo;
    this.studentList[idx] = temp;    
    this.message = "Student Updated Successfully.";
    this.isUpdate = false;
  }

  delete(rollNo : number) : void{
    let confirmMsg = confirm("Are you sure want to delete Roll No "+rollNo);
    if(confirmMsg){
      let idx : number = this.studentList.indexOf(this.studentList.find(stud=>stud.rollNo === rollNo));    
      this.studentList.splice(idx,1);
      this.message = "Student Deleted Successfully with RollNo "+rollNo;
    }  
  }
}
