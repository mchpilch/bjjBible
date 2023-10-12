import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})


export class ValidationService {
  //private static mismatchErrorKey: string = 'mismatch';

  // static createEqualsValidator(control: AbstractControl<any>, matchControl: AbstractControl<any>): ValidatorFn {
  //   return () => (control?.value === matchControl?.value ? null : {[this.mismatchErrorKey]: true});
  //
  // }

  static createEqualsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { 'mismatch': true };
    };
  }
}

