import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-util',
  template: 'Result Is: {{result}}',
  styles: ['']
})
export class StringUtilComponent implements OnInit {

  @Input()
  result : string = '';

  constructor() { 
    console.log("StringUtil Component Object Created...!");
  }

  ngOnInit() {
  }

  convertToUpper(str : string) : string{
    return str.toUpperCase();
  }

  convertToLower(str : string) : string{
    return str.toLowerCase();
  }

  convertToReverse(str : string) : string{
    let revStr : string =  str.split('').reverse().join('');
    return revStr;
  }
}
