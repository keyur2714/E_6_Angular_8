import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ActivatedRoute } from '@angular/router';
import { CustomServiceService } from '../custom-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  service : Service = new Service();

  constructor(private activatedRoute : ActivatedRoute,private customService : CustomServiceService,private location : Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        //alert(paramMap.get('id'));
        this.customService.getServiceById(parseInt(paramMap.get('id'))).subscribe(
          (data : Service)=>{
            this.service = data;
          }
        )
      }
    )
    // this.activatedRoute.params.subscribe(
    //   (param)=>{
    //     //alert(param.id);
    //     this.customService.getServiceById(param.id).subscribe(
    //       (data : Service)=>{
    //         this.service = data;
    //       }
    //     )
    //   }
    // )
  }

  back() : void {
    this.location.back();
  }
}
