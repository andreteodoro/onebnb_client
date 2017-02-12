import { Component, OnInit, Input } from '@angular/core'
import { PropertiesService } from '../../shared/properties.service';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {

  @Input() wishlisted: boolean = false;
  @Input() photo: string;
  @Input() name: string;
  @Input() price: string;
  @Input() stars: string;
  @Input() whish: string;
  @Input() property_id: string;

  constructor(private PropertiesService: PropertiesService, private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  wishlist(status, property_id) {
    if (status == true) {
      this.PropertiesService.addToWishlist(property_id)
        .subscribe(data => {
          this.wishlisted = status;
        }
      );
    } else{
      this.PropertiesService.removeFromWishlist(property_id)
        .subscribe(data => {
          this.wishlisted = status;
        }
      );
    }
  }
}
