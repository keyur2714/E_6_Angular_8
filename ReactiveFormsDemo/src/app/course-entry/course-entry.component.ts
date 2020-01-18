import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Course } from './course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  courseEntryForm ;  
  course : Course = new Course();
  isSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    //this.createCourseEntryForm();
    this.createCourseEntryFormWithFormBuilder();
  }

  // createCourseEntryForm(){
  //   this.courseEntryForm=new FormGroup(
  //     {
  //       courseCode : new FormControl('ANG',Validators.required),
  //       courseName : new FormControl('Angular',[Validators.required,Validators.minLength(3)]),
  //       fees : new FormControl(13800,[Validators.required,Validators.pattern('^[0-9]+$')]),        
  //       trainers : new FormArray([new FormControl('Keyur')])
  //     }
  //   )
  // }

  createCourseEntryFormWithFormBuilder(){
    this.courseEntryForm=this.formBuilder.group(
      {
        courseCode : this.formBuilder.control('ANG',Validators.required),
        courseName : this.formBuilder.control('Angular',[Validators.required,Validators.minLength(3)]),
        fees : this.formBuilder.control(13800,[Validators.required,Validators.pattern('^[0-9]+$')]),        
        trainers : this.formBuilder.array([this.formBuilder.control('Keyur')])
      }
    )
  }

  save() : void{
    console.log(this.courseEntryForm);
    if(this.courseEntryForm.valid){
        console.log(this.courseEntryForm.value);    
        console.log(this.courseEntryForm.controls['courseCode'].value);
        console.log(this.courseEntryForm.controls['courseName'].value);
        console.log(this.courseEntryForm.controls['fees'].value);            
        this.course = this.courseEntryForm.value;
        this.isSubmitted = true;
    }
  }

  addMore() : void{
    //let newTrainerControl = new FormControl('');
    //(<FormArray>this.courseEntryForm.controls['trainers']).push(newTrainerControl);
    (this.courseEntryForm.controls['trainers'] as FormArray).push(this.formBuilder.control(''));
  }
}
