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
    }

    ngOnInit() {
        console.log('oI s')
        this.mainFormGroup = this._formBuilder.group({
            stepData: this._formBuilder.array([
                this._formBuilder.group({
                    name: ["", Validators.required]
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
            name: ["", Validators.required]
        });
        arrayControl.push(newGroup);

        setTimeout(() => {
            this.currentStep = currentIndex + 1;
        });
        console.log('addInput')
    }

    delInput(index: number): void {
        const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
        arrayControl.removeAt(index);
        console.log('delInput')
    }

  clog(): void {
    console.log()
  }
}
