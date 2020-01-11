import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  employee : Employee = new Employee();
  isSubmitted : boolean = false;
  @ViewChild("frm",{static : false})
  ngForm : NgForm;

  constructor() { }

  ngOnInit() {
    this.setDefaultValue();
  }

  setDefaultValue() : void{
    this.employee.gender = "M";
    this.employee.dept = "IT";
  }

  reset() : void{
    this.ngForm.resetForm({});        
  }

  save(frm : NgForm) : void{
    console.log(frm);
    if(frm.valid){
      this.isSubmitted = true;
      console.log(frm.value);
      this.employee.display();
      if(frm.controls['name'].valid){
        console.log(frm.controls['name'].value);
      }      
    }
  }
}
