import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { PropertiesService } from '../../shared/properties.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService,
    private _propertiesService: PropertiesService, private NotificationsService: NotificationsService) { }

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
        this.NotificationsService.error(
          'Erro no Login :(',
          'Tente novamente!',
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 10,
            lastOnBottom: true
          }
        );
      }
    );
  }

  resetPassword(event) {
    event.preventDefault();
    document.getElementsByClassName("dropdown")[0].classList.toggle("open")
    this._propertiesService.resetPassword = true;
  }

}
