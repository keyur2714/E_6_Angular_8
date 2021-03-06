import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringUtilComponent } from './string-util/string-util.component';
import { MyStyleDirective } from './my-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    StringUtilComponent,
    MyStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
