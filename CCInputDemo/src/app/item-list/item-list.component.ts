import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList : Item[] = [];
  headerList : string[] = ["Item #","Code","Name","Price"];
  columnList : string[] = ["id","code","name","price"];

  constructor() { }

  ngOnInit() {
    let item1 = new Item(1,'PH','Kanda Pohe',20);
    let item2 = new Item(2,'VP','Veg Puff',15);
    let item3 = new Item(3,'TEA','Ginger Tea',12);
    let item4 = new Item(4,'CR','Cream Roll',10);
    this.itemList = [item1,item2,item3,item4];
  }

}
