import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

class DialogAnimationsExampleDialog {
}

@Component({
    selector: 'app-login-register-question',
    templateUrl: './login-register-question-dialog.component.html',
    styleUrls: ['./login-register-question-dialog.component.css']
})
export class LoginRegisterQuestionDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
        private router: Router
    ) {
    }

    navigateLogin() {
        this.navigateToLoginRegister('login');
    }

    navigateRegister() {
        this.navigateToLoginRegister('register');
    }

    navigateToLoginRegister(action: string) {
        console.log('action dialog', action)
        this.router.navigate(['/account/login-register'], {queryParams: {action: action}});
    }
}

