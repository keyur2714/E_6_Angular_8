import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from './custom-service.service';
import { Service } from './service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services : Service[] = [];

  constructor(private customService : CustomServiceService,private router : Router) { }

  ngOnInit() {
    this.getAllServices();
  }

  getAllServices() : void {
    this.customService.getAllServices().subscribe(
      (data : Service[])=>{
        this.services = data;
      }
    )
  }

  add() : void {
    this.router.navigate(['/serviceEntry'])
  }

  edit(id : number) : void {
    this.router.navigate(['/serviceEdit',id])
  }

  delete(id : number) : void {
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.customService.delete(id).subscribe(
        ()=>{
          alert("Service Deleted Successfully with Id: "+id);        
          this.getAllServices();
        }
      )
    }    
  }
}
