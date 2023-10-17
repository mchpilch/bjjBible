import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-register-question',
    templateUrl: './login-register-question-dialog.component.html',
    styleUrls: ['./login-register-question-dialog.component.css']
})
export class LoginRegisterQuestionDialogComponent {
    constructor(
        private router: Router,
    ) {
    }

    navigateToLoginRegister(action: string) {
        this.router.navigate(['/account/login-register'], {queryParams: {action: action}});
    }
}

