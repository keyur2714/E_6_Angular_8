import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{
  @Input()
  color : string = 'orange';
  @Input()
  fontSize : string = '25px';

  constructor(private elementRef: ElementRef) { 
    console.log("MyStyleDirective Object Created...!");
    console.log("Element is : "+this.elementRef.nativeElement);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }
}
