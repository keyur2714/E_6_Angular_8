import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { CourseService } from './manage-course/course.service';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { ManageExamComponent } from './manage-exam/manage-exam.component';
import { ManageObservablesComponent } from './manage-observables/manage-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCourseComponent,
    CourseEntryComponent,
    ManageExamComponent,
    ManageObservablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
