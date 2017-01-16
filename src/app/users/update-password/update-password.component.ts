import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, UpdatePasswordData } from 'angular2-token';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  private _updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};

  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._tokenService.updatePassword(this._updatePasswordData).subscribe(
      res => this._updatePasswordData = <UpdatePasswordData>{},
      error => {
        this._updatePasswordData = <UpdatePasswordData>{};
        console.log(error)
      }
    );
  }

}
