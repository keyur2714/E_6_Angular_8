import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skillList : Skill[] = [];

  constructor() { }

  ngOnInit() {
    let skill1 = new Skill('Language',["Java","Type Script","C","C++"]);
    let skill2 = new Skill('Operating System',["Windows","Linux"]);
    let skill3 = new Skill('Database',["MySql","Sql Server","Oracle"]);
    let skill4 = new Skill('Tools',["Jenkins","Maven","POSTMAN","VS Code"]);
    this.skillList.push(skill1);
    this.skillList.push(skill2);
    this.skillList.push(skill3);    
    this.skillList.push(skill4);
  }

}
