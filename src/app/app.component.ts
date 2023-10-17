import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
    LoginRegisterQuestionDialogComponent
} from "./services/dialogs/login-register-question/login-register-question-dialog.component";
import {AuthenticationService} from "./services/authentication/authentication.service";
import {LogoutQuestionComponent} from "./services/dialogs/logout-question/logout-question.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'bjjBible';
    userLoggedIn: boolean = false;

    constructor(
        public dialog: MatDialog,
        private authService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.authService.userLoggedIn$.subscribe((loggedIn) => {
            this.userLoggedIn = loggedIn;
        });
    }

    openDialogLoginRegister(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(LoginRegisterQuestionDialogComponent, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
            position: {right: '1%', top: '4%'}
        });
    }

    openDialogLogOut(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(LogoutQuestionComponent, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
            position: {right: '1%', top: '4%'}
        });
    }
}

