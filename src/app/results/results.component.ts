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

  private properties: Property[] = [];

  constructor(private PropertiesService: PropertiesService, private route: ActivatedRoute) { }

  ngOnInit() {
	// Get the parameters for the search
	this.route
  	.queryParams
  	.subscribe(params => {
     	this.PropertiesService.searchProperties(params)
      	.subscribe(data => this.properties = data);
  	});
  }
}
