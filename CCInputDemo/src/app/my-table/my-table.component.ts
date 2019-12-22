import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() dataList : any[] = [];
  @Input() headerList : string[] = [];
  @Input() columnList : string[] = [];
  @Input() cardHeader : string = '';
  @Input() bgColor : string = 'dark';
  @Input('textColor') txtColor : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
