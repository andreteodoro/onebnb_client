import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class PropertiesService {

  private url: string = "http://localhost:3000/api/v1/properties.json";
  public resetPassword: boolean = false;

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  autocomplete() {
    return this.http.get(environment.api_base_url + 'autocomplete.json')
      .map(res => res.json());
  }

  searchProperties(params) {
    let parameters = new URLSearchParams();
    for (var f in params) { parameters.set(f, params[f]) }

    return this.http.get(environment.api_base_url + 'search.json', { search: parameters })
      .map(res => res.json());
  }

  getFeatured() {
    return this.http.get(environment.api_base_url + 'featured.json')
      .map(res => res.json());
  }

  getProperties() {
    return this.http.get(environment.api_base_url + 'properties.json')
      .map(res => res.json());
  }

  getProperty(id) {
    return this.http.get(environment.api_base_url + 'properties/' + id + '.json')
      .map(res => res.json());
  }

  addProperty(property) {
    var address_params = {
      country: property.country,
      state: property.state,
      city: property.city,
      neighborhood: property.neighborhood,
      street: property.street,
      number: property.number,
      zipcode: property.zipcode
    }

    var facility_params = {
      wifi: property.wifi,
      washing_machine: property.washing_machine,
      clothes_iron: property.clothes_iron,
      towels: property.towels,
      air_conditioning: property.air_conditioning,
      heater: property.heater,
      refrigerator: property.refrigerator
    }
    return this._tokenService.post('properties/', {
      'api_v1_property': {
        name: property.name,
        price: property.price,
        description: property.description,
        guest_max: property.guest_max,
        beds: property.beds,
        bedroom: property.bedroom,
        bathroom: property.bathroom,
        accommodation_type: property.accommodation_type,
        "address_attributes": address_params,
        "facility_attributes": facility_params
      }
    })
      .map(res => res.json());
  }

  updateProperty(property, id) {
    var address_params = {
      country: property.country,
      state: property.state,
      city: property.city,
      neighborhood: property.neighborhood,
      street: property.street,
      number: property.number,
      zipcode: property.zipcode
    }

    var facility_params = {
      wifi: property.wifi,
      washing_machine: property.washing_machine,
      clothes_iron: property.clothes_iron,
      towels: property.towels,
      air_conditioning: property.air_conditioning,
      heater: property.heater,
      refrigerator: property.refrigerator
    }
    return this._tokenService.put('properties/' + id, {
      'api_v1_property': {
        name: property.name,
        price: property.price,
        description: property.description,
        guest_max: property.guest_max,
        beds: property.beds,
        bedroom: property.bedroom,
        bathroom: property.bathroom,
        accommodation_type: property.accommodation_type,
        "address_attributes": address_params,
        "facility_attributes": facility_params
      }
    })
      .map(res => res.json());
  }

  deleteProperty(id){
  return this._tokenService.delete('properties/' + id + '.json')
    .map(res => res.json());
}

  addToWishlist(property_id) {
    return this._tokenService.post('properties/' + property_id + '/wishlist', {})
      .map(res => res.json());
  }

  removeFromWishlist(property_id) {
    return this._tokenService.delete('properties/' + property_id + '/wishlist')
      .map(res => res.json());
  }

  myTrips() {
    return this._tokenService.get(environment.api_base_url + 'trips')
      .map(res => res.json());
  }

  myProperties(){
    return this._tokenService.get('my_properties')
      .map(res => res.json());
  }

  is_available(checkin_date, checkout_date, id) {
    let params = new URLSearchParams();
    params.set('checkin_date', checkin_date);
    params.set('checkout_date', checkout_date);

    return this.http.get(environment.api_base_url + 'properties/' + id + '/check_availability.json', { search: params })
      .map(res => res.json());
  }
}
