import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { PropertiesService } from '../../shared/properties.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService,
    private _propertiesService: PropertiesService) { }

  private _signInData: SignInData = <SignInData>{};
  private _output: any;

  ngOnInit() {
  }

  onSubmit() {
    this._output = null;

    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this._signInData = <SignInData>{};
        this._output = res;
        location.reload();
      }, error => {
        this._signInData = <SignInData>{};
        this._output = error;
      }
    );
  }

  resetPassword(event) {
    event.preventDefault();
    document.getElementsByClassName("dropdown")[0].classList.toggle("open")
    this._propertiesService.resetPassword = true;
  }

}
