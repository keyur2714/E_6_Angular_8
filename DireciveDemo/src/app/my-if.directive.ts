import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private viewContainerRef : ViewContainerRef,private templateRef: TemplateRef<any>) { 
    console.log("MyIfDirective Object Created...!");
  }

  @Input("appMyIf") set myIf(condition : Boolean){
   //alert(condition); 
   if(condition){
     this.viewContainerRef.createEmbeddedView(this.templateRef);
   }else{
     this.viewContainerRef.clear();
   }
  }

  @Input("appMyIfExtra") set extra(ext : any) {
    console.log(ext);
  }
}
