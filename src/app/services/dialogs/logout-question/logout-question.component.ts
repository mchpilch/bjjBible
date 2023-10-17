import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'app-logout-question',
  templateUrl: './logout-question.component.html',
  styleUrls: ['./logout-question.component.css']
})
export class LogoutQuestionComponent {

  action: string = 'stay';
  constructor(
    private router: Router,
    private authSer: AuthenticationService,
  ) {

  }


    onLogoutClick() {
        this.action = 'logout';
        this.authSer.setUserLoggedIn(false);
        this.router.navigate(['/account/login-register'], {queryParams: {action: 'login'}});
    }

    onCancelClick() {
        this.action = 'stay';
    }
}
