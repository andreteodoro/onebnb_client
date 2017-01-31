import { Component, OnInit, Input } from '@angular/core'
import { PropertiesService } from '../../shared/properties.service';


@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {

  public wishlisted: boolean = false;
  @Input() photo: string;
  @Input() name: string;
  @Input() price: string;
  @Input() stars: string;
  @Input() whish: string;

  constructor(private _propertiesService: PropertiesService) { }

  ngOnInit() {
  }

  wishlist(status, property_id) {
    // TODO: Nesta parte nós precisamos usar um Service para altrar a Wishlist do nosso usuário
    // Também precisamos emitir uma mensagem dizendo que apenas usuários logados podem fazer isso
    this._propertiesService.addToWishlist(property_id).subscribe(
      res => this.wishlisted = status,
      error => console.log(error)
    );

    console.log(status);

  }
}
