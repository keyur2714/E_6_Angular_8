import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service.model';
import { CustomServiceService } from '../services/custom-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-service-entry',
  templateUrl: './service-entry.component.html',
  styleUrls: ['./service-entry.component.css']
})
export class ServiceEntryComponent implements OnInit {

  service : Service = new Service();
  editId : number = 0;

  constructor(private customService : CustomServiceService,private router: Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.editId = parseInt(paramMap.get('id'));
        //alert(this.editId);
        if(isNaN(this.editId))
          this.editId = 0;
        if(this.editId !== undefined && this.editId !== 0){
          this.customService.getServiceById(this.editId).subscribe(
            (data)=>{
              this.service = data;
            }
          )
        }
        
      }
    )
  }

  save() : void {
    this.customService.save(this.service).subscribe(
      (data)=>{
        alert("Service Created Successfully with id: "+data.id);
        this.router.navigate(['/services']);
      }
    )
  }

  update() : void {
    this.customService.update(this.service).subscribe(
      (data)=>{
        alert("Service Updated Successfully with id: "+data.id);
        this.router.navigate(['/services']);
      }
    )
  }
}
