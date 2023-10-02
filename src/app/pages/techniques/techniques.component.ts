import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../services/snackBar/snackbar.service";

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.css']
})
export class TechniquesComponent {
  mainFormGroup: FormGroup;

  currentStep = 0;

  showStepper = false;

  constructor(
    private _formBuilder: FormBuilder,
    private snackbarService: SnackbarService
  ) {
    this.mainFormGroup = this._formBuilder.group({
      stepData: this._formBuilder.array([
        this._formBuilder.group({
          name: ["", Validators.required],
          desc: ["", Validators.required],
          image: ["", Validators.required],
        })
      ])
    });
  }

  getControls() {
    return (this.mainFormGroup.get('stepData') as FormArray).controls;
  }

  addInput(currentIndex: number): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
    let newGroup = this._formBuilder.group({
      name: ["", Validators.required],
      desc: ["", Validators.required],
    });

    arrayControl.push(newGroup);

    setTimeout(() => {
      this.currentStep = currentIndex + 1;
    });
  }

  delInput(index: number): void {
    if (index > 0) {
      const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
      arrayControl.removeAt(index);
      this.snackbarService.showMsg('Item deleted successfully');
    }else{
      this.snackbarService.showMsg('Item cannot be  deleted');
    }
  }

  submit() {
    // // TODO: Use EventEmitter with form value
    // this.newTechnique =
    // console.warn(this.mainFormGroup.value);
  }
}

