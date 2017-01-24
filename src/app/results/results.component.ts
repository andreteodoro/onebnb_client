import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Property } from '../shared/property';
import { PropertiesService } from '../shared/properties.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  private properties: Property[] = []; string
  private mapPins: Array<{
    lat: number,
    lng: number,
    draggable: boolean,
    label: string,
    icon: string,
    photo: string,
    price: number
  }> = [];
  private lat: number = -13.4963582;
  private lng: number = -69.8079044;

  constructor(private PropertiesService: PropertiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the search parameters from the URL
    this.route
      .queryParams
      .subscribe(params => {
        this.PropertiesService.searchProperties(params)
          .subscribe(data => {
            this.properties = data;
            this.mapPins = [];
            this.formatToMap();
          }
          );
      });
  }

  formatToMap() {
    let i = 0;
    for (let p of this.properties) {
      this.mapPins.push({
        lat: +p['property']['address']['latitude'],
        lng: +p['property']['address']['longitude'],
        draggable: false,
        price: p['property']['price'],
        icon: "http://bootcamp.onebitcode.com/wp-content/uploads/2017/01/b3.png",
        label: p['property']['name'],
        photo: p['property']['photos'][0]
      });
      if (i == 0) {
        this.lat = +p['property']['address']['latitude'];
        this.lng = +p['property']['address']['longitude'];
      }
      i++;
    }
  }
}
