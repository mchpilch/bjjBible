import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-techniques',
    templateUrl: './techniques.component.html',
    styleUrls: ['./techniques.component.css']
})
export class TechniquesComponent {
    mainFormGroup: FormGroup;

    currentStep = 0;

    constructor(private _formBuilder: FormBuilder) {
      console.log('constr')
      this.mainFormGroup = this._formBuilder.group({
        stepData: this._formBuilder.array([
          this._formBuilder.group({
            name: ["", Validators.required],
            desc: ["", Validators.required],
          })
        ])
      });
    }

    getControls() {
        return (this.mainFormGroup.get('stepData') as FormArray).controls;
    }

    addInput(currentIndex: number): void {
        console.log('addInput')
        const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
        let newGroup = this._formBuilder.group({
            name: ["", Validators.required],
            desc: ["", Validators.required],
        });
      // console.log('FormArray contents before push:', arrayControl.value);
      arrayControl.push(newGroup);



      console.log('incread')
        setTimeout(() => {
          this.currentStep = currentIndex + 1;
        });

      console.log('  this.currentStep ',   this.currentStep )
    }

    delInput(index: number): void {
        console.log('delInput')
        const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
        arrayControl.removeAt(index);
    }

  clog(n: number): void {
    console.log('clog')
    console.log('index ', n);
    console.log('currentStep ', this.currentStep);
    console.log('FormArray contents', this.mainFormGroup.controls["stepData"].value);
  }
}
