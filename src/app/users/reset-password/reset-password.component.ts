import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, ResetPasswordData } from 'angular2-token';
import { PropertiesService } from '../../shared/properties.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService,
    private _propertiesService: PropertiesService) { }

  private _resetPasswordData: ResetPasswordData = <ResetPasswordData>{};

  ngOnInit() {
  }

  onSubmit() {
    this._tokenService.resetPassword(this._resetPasswordData).subscribe(
      res => {
        document.getElementsByClassName("dropdown")[0].classList.toggle("open")
        this._propertiesService.resetPassword = false;
        this._resetPasswordData = <ResetPasswordData>{};
      }, error => {
        this._resetPasswordData = <ResetPasswordData>{};
        console.log(error)
      }
    );
  }
}
