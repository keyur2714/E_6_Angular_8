import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {



  constructor(private viewContainerRef : ViewContainerRef,private templateRef: TemplateRef<any>) { }

  @Input() set appMyLoop(length : number){
    //alert(length);
    for(let i=1;i<=length;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
