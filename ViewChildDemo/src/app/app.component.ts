import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'ViewChildDemo';
  @ViewChild("lbl",{static : false})
  h1 : ElementRef<any>;

  // @ViewChild("result",{static : false})
  // result : ElementRef;

  @ViewChild("str",{static : false})
  str : ElementRef;

  @ViewChild(StringUtilComponent,{static : false})
  stringUtilComponent : StringUtilComponent;

  res : string = '';

  ngOnInit(){

  }

  ngAfterViewInit(){
    console.log(this.h1.nativeElement);
    this.h1.nativeElement.innerHTML='Hi...';
    this.h1.nativeElement.style.color = 'Red';
    this.h1.nativeElement.style.fontSize = '15px';
  }

  upper() : void{
    let s = this.str.nativeElement.value;    
//    this.result.nativeElement.innerHTML = "Result is : "+ this.stringUtilComponent.convertToUpper(s);
    this.res = '';
    this.res = this.stringUtilComponent.convertToUpper(s);
    this.str.nativeElement.value = this.stringUtilComponent.convertToUpper(s);   
    this.str.nativeElement.style.background = 'yellow';
  }

  lower() : void{
    let s = this.str.nativeElement.value;    
  //  this.result.nativeElement.innerHTML = "Result is : "+ this.stringUtilComponent.convertToLower(s);
    this.res = '';  
    this.res = this.stringUtilComponent.convertToLower(s);
    this.str.nativeElement.value = this.stringUtilComponent.convertToLower(s);   
    this.str.nativeElement.style.background = 'yellow';
  }

  reverse() : void{
    let s = this.str.nativeElement.value;    
    //this.result.nativeElement.innerHTML = "Result is : "+ this.stringUtilComponent.convertToReverse(s);    
    this.res = '';
    this.res = this.stringUtilComponent.convertToReverse(s);
    this.str.nativeElement.value = this.stringUtilComponent.convertToReverse(s);   
    this.str.nativeElement.style.background = 'yellow';
  }
}
