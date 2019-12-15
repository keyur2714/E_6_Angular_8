import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {

  isUpdate : boolean = false;
  updateIdx : number  = -1;
  name : string = 'vicki';
  message : string = '';
  friendList : string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
  }

  addFriend() : void{
    //alert("Say Hello...!"+name);
    let idx = this.friendList.indexOf(this.name);
    if(idx === -1 && this.name !== ''){
      this.message = '';
      this.friendList.push(this.name);      
    }else if(this.name === ''){
      this.message = "Name should not be Empty.";
    }
    else{
      this.message = "Name "+this.name+" Already Exists.";
    }    
  }

  edit(idx : number) : void {
    //alert(idx);
    this.updateIdx = idx;
    this.isUpdate = true;
    this.name = this.friendList[idx];
  }

  updateFriend() : void{
    this.friendList[this.updateIdx] = this.name;
    this.message = 'Name Updated Successfullly...!';
    this.isUpdate = false;
    this.updateIdx = -1;
  }

  delete(idx : number) : void{
    let confirmMsg = confirm("Are you sure want to delete name "+this.friendList[idx]+" from you friend list?");
    if(confirmMsg){
      this.message = this.friendList[idx]+" Deleted Successfully...!";
      this.friendList.splice(idx,1);      
    }
  }
}
