import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
    LoginRegisterQuestionDialogComponent
} from "./services/dialogs/login-register-question/login-register-question-dialog.component";
import {AuthenticationService} from "./services/authentication/authentication.service";
import {LogoutQuestionComponent} from "./services/dialogs/logout-question/logout-question.component";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DatePipe]
})
export class AppComponent {
    title: string = 'bjjBible';
    userLoggedIn: boolean = false;
    currentDate: any;

    constructor(
        public dialog: MatDialog,
        private authService: AuthenticationService,
        private datePipe: DatePipe
    ) {
    }

    ngOnInit() {
        this.authService.userLoggedIn$.subscribe((loggedIn) => {
            this.userLoggedIn = loggedIn;
        });

        const currentDate = new Date();
        this.currentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
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

