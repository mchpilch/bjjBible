import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
    LoginRegisterQuestionDialogComponent
} from "./services/dialogs/login-register-question/login-register-question-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'bjjBible';
    userLoggedIn: boolean = false;

    constructor(public dialog: MatDialog) {
    }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(LoginRegisterQuestionDialogComponent, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
            position: {right: '1%', top: '4%'}
        });
    }
}

