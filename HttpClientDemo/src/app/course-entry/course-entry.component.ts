import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../manage-course/course.model';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CourseService } from '../manage-course/course.service';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  @Input()
  course : Course = new Course();
  @Input()
  isUpdate : boolean = false;
  message : string = '';

  @Output()
  actionStatus = new EventEmitter<string>();

  constructor(private courseService : CourseService) { }

  ngOnInit() {
  }

  save(frm : NgForm) : void {
    if(frm.valid){
      if(this.isUpdate){
        this.courseService.update(this.course).subscribe(
          (data : Course)=>{
            this.message = "Course Updated with Id : "+data.id;
            this.isUpdate = false;
            this.course = new Course();
            this.course.fees = 0;
            this.actionStatus.emit("SUCCESS");
          }
        )
      }else{
        this.courseService.save(this.course).subscribe(
          (data : Course)=>{
            this.message = "Course Created with Id : "+data.id;
            this.actionStatus.emit("SUCCESS");
          }
        )
      }        
    }
  }
}
