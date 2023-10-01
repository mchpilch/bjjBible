import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  // Show a success snackbar
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      panelClass: ['success-snackbar'], // Optional CSS class for styling
    });
  }

  // Show an error snackbar
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar'],
    });
  }
}
