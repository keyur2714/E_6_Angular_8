import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  appUrl : string = 'http://localhost:3000/services';

  constructor(private httpClient : HttpClient) { }

  getAllServices() : Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.appUrl);
  }

  getServiceById(id : number) : Observable<Service> {
    return this.httpClient.get<Service>(this.appUrl+"/"+id);
  }

  save(service : Service) : Observable<Service>{
    return this.httpClient.post<Service>(this.appUrl,service);
  }

  update(service : Service) : Observable<Service>{
    return this.httpClient.put<Service>(this.appUrl+"/"+service.id,service);
  }

  delete(id : number) : Observable<void> {
    return this.httpClient.delete<void>(this.appUrl+"/"+id);
  }
}
