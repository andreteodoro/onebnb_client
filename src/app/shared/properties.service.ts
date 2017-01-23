import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class PropertiesService {

  private url: string = "http://localhost:3000/api/v1/properties.json";
  public resetPassword: boolean = false;

  constructor(private http: Http) { }

  getProperties(){
    return this.http.get(environment.api_base_url + 'properties.json')
      .map(res => res.json());
  }

  getProperty(id){
    return this.http.get(environment.api_base_url + 'properties.json/' + id)
      .map(res => res.json());
  }

  addProperty(property){
    return this.http.post(environment.api_base_url + 'properties.json', {'property': property})
      .map(res => res.json());
  }

  updateProperty(property){
    return this.http.put(environment.api_base_url + 'properties.json/' + property.id, {'property': property})
      .map(res => res.json());
  }

  deleteProperty(id){
    return this.http.delete(environment.api_base_url + 'properties.json/' + id)
      .map(res => res.json());
  }
}
