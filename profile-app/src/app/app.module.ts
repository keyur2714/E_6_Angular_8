import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { SkillListComponent } from './skill-list/skill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    PersonalInfoComponent,
    EducationDetailsComponent,
    SkillListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
