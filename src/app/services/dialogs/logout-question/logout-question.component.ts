import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication.service";
import {SnackbarService} from "../../snack-bar/snackbar.service";

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
    private snackBar: SnackbarService
  ) {

  }


    onLogoutClick() {
        this.action = 'logout';
        this.authSer.setUserLoggedIn(false);
        this.router.navigate(['/account/login-register'], {queryParams: {action: 'login'}});
        this.snackBar.showMsg('You have logged out :((')

    }

    onCancelClick() {
        this.action = 'stay';
    }
}
