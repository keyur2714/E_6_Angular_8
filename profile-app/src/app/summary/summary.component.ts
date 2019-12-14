import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary : string = '';

  constructor() { }

  ngOnInit() {
    this.summary = 'i have around 11 years of experience in java / j2ee technology.';
    this.summary = this.summary + 'currently working as a Java Tech Lead in FIS.';
  }

}
