import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
import { Injectable } from '@angular/core';
@Injectable()
export class CourseService{

    appUrl : string = 'http://localhost:3000/courses';

    constructor(private httpClient : HttpClient){
    }

    getAllCourses() : Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.appUrl);
    }
}