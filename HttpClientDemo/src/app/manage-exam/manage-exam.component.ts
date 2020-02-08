import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Angular } from './angular.question';
import { SpringQuestion } from './spring.question';

@Component({
  selector: 'app-manage-exam',
  templateUrl: './manage-exam.component.html',
  styleUrls: ['./manage-exam.component.css'],
  providers : [
    {provide : Question , useClass : SpringQuestion}
  ]
})
export class ManageExamComponent implements OnInit {

  question : string = '';

  constructor(private questionObj : Question) { }

  ngOnInit() {
    this.question = this.questionObj.askQuestion();
  }

}
