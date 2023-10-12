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
        private router: Router,
    ) {
    }

    navigateToLoginRegister(action: string) {
        this.router.navigate(['/account/login-register'], {queryParams: {action: action}});
    }
}

