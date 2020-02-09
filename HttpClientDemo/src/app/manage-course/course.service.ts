import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class CourseService{

    appUrl : string = 'http://localhost:3000/courses';

    corseNames : string[] = ["Angular","Java","Spring"];

    constructor(private httpClient : HttpClient){
    }

    getFixCourse() : Observable<string[]>{
        return of(this.corseNames);
    }

    getAllCourses() : Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.appUrl);
    }

    getCourseById(id:number) : Observable<Course>{
        return this.httpClient.get<Course>(this.appUrl+"/"+id+"/course").pipe(
            map(course=>{
                course.courseName = course.courseName.toUpperCase();
                return course;
            }),
            catchError(error=> {
                    console.log(error.status);
                    console.log(error.statusText);
                    console.log(error.message);
                    return throwError(error)
                }
            )
        )
    }

    save(course : Course) : Observable<Course> {
        return this.httpClient.post<Course>(this.appUrl,course);
    }

    update(course : Course) : Observable<Course> {
        return this.httpClient.put<Course>(this.appUrl+"/"+course.id,course);
    }

    deleteCourseById(id : number) : Observable<void>{
        return this.httpClient.delete<void>(this.appUrl+"/"+id);
    }
}