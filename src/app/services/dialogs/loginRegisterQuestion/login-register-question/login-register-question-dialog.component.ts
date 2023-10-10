import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

class DialogAnimationsExampleDialog {
}

@Component({
  selector: 'app-login-register-question',
  templateUrl: './login-register-question-dialog.component.html',
  styleUrls: ['./login-register-question-dialog.component.css']
})
export class LoginRegisterQuestionDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
  }
}

