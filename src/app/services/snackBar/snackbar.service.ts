import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  // Show a success snackbar
  showMsg(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
