import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  dataList : Lookup[] = [];

  @Input()
  selectedItem : Lookup;

  @Input()
  label : string = 'Select'

  @Output()
  getSelectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedItem() : void{
    this.getSelectedItem.emit(this.selectedItem);
  }

}
