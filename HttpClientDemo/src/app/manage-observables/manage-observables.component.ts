import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map ,filter, catchError } from 'rxjs/operators';
import { CourseService } from '../manage-course/course.service';

@Component({
  selector: 'app-manage-observables',
  templateUrl: './manage-observables.component.html',
  styleUrls: ['./manage-observables.component.css']
})
export class ManageObservablesComponent implements OnInit {

  subscription : Subscription;
  num ;
  numObservable : Observable<number> = interval(1000);

  

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.courseService.getFixCourse().subscribe(
      (data)=>{
        console.log(data);
      }
    )
    this.numObservable.pipe(
      filter(data =>(data != 5 && data != 7),
      map(data =>{
            return data;
          }
        )
      ),
      catchError(e=>{return e})
    ).subscribe(data=>{
      this.num = data;
    })
  }

  stop() : void{
    this.subscription.unsubscribe();
  }
}
