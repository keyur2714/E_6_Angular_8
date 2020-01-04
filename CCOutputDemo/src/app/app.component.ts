import { Component, OnInit } from '@angular/core';
import { Country } from './country.model';
import { Lookup } from './my-dropdown/lookup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CCOutputDemo';
  newMessage : string = '';

  dataList : Lookup[] = [
    new Lookup(1,"","keyur"),
    new Lookup(1,"","denish"),
    new Lookup(1,"","vinit")
  ];
  selectedName : Lookup;
  label : string = "Select Name";

  countryList : Lookup[] = [
    new Lookup(1,"IND","India"),
    new Lookup(2,"US","United States"),
    new Lookup(3,"UK","United Kingdom")
  ];

  selectedCountry : Lookup;

  ngOnInit(){
    this.selectedName = this.dataList[1];
    this.selectedCountry = this.countryList[1];
  }

  getMessage(msg : string) : void{
    console.log(2);
    console.log(msg);
    this.newMessage = msg;
  }

  getItem(selectedItem : Lookup) : void{
    this.selectedName = selectedItem;
  }

  getSelectedCountry(country) : void{
    this.selectedCountry = country;
  }
}
