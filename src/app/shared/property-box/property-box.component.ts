import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  wishlist(status, property_id) {
    // TODO: Nesta parte nós precisamos usar um Service para altrar a Wishlist do nosso usuário
    // Também precisamos emitir uma mensagem dizendo que apenas usuários logados podem fazer isso
    console.log(status);
    this.wishlisted = status;
  }
}
