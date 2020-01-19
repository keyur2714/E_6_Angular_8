import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {

  courseList: Course[] = [];

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(
      (data : Course[])=>{
        this.courseList = data;
      },
      (error)=>{

      }

    )
  }

}
