import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css'],
  providers : []
})
export class ManageCourseComponent implements OnInit {

  course : Course = new Course();
  isUpdate : boolean = false;

  courseList: Course[] = [];

  constructor(private courseService : CourseService) { }

  ngOnInit() {
     this.getAllCourses(); 
  }

  getAllCourses() : void {
    this.courseService.getAllCourses().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      },
      (error)=>{

      }

    )
  }

  edit(id) : void{
    this.courseService.getCourseById(id).subscribe(
      (data : Course)=>{
        this.course = data;
        this.isUpdate = true;
      },
      (error)=>{
        alert(error.status+" "+error.statusText+" "+error.message);
      }
    )
  }

  delete(id) : void{
    let confirmMsg = confirm("Are you sure want to delete course?");
    if(confirmMsg){
      this.courseService.deleteCourseById(id).subscribe(
        (data)=>{
          alert("Course Deleted with Id: "+id);
          this.getAllCourses();
        }
      )
    }    
  }

  getActionStatus(status) : void {
    if(status === 'SUCCESS'){
      this.getAllCourses();
    }
  }
}
