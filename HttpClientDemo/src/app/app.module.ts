import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { CourseService } from './manage-course/course.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
