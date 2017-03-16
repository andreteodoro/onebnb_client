import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../shared/properties.service';
import { Property } from '../../shared/property';


@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {

  private property: Property;
  private address: any = [];
  private details: any = [];
  private facilities: any = [];
  private photos: any = [];
  private comments: any = [];
  private profile: any = [];
  private lat: number = 0;
  private lng: number = 0;

  private guests_array:Array<Object> = [];

  private guests: number = 1;
  private begindate: string = "";
  private enddate: string = "";
  private intervalOfDays: number = 0;


  constructor(private PropertiesService: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.PropertiesService.getProperty(params['id'])
        .subscribe(
          data => {
            this.property = data;
            this.photos = data.property.photos;
            this.comments = data.property.comments;
            this.profile =  data.property.user;
            this.details =  data.property;
            this.address =  data.property.address;
            this.facilities = data.property.facility;
            this.lat = +data.property.address.latitude;
            this.lng = +data.property.address.longitude;

            for(var i = 0; i < this.details.guest_max; i++) {
              this.guests_array.push({'num': i + 1, 'name': i + 1})
            }
          },
          err => {this.router.navigateByUrl('/');}
        );
    });

    this.route
      .queryParams
      .subscribe(params => {
        this.begindate = params['checkin'];
        this.enddate = params['checkout'];
        this.intervalOfDays = params['intervalOfDays'];
        this.guests = params['guests'];
      });
  }
}
