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
            formCount: 1,
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
        const content = this;
        setTimeout(() => {
            content.currentStep = currentIndex + 1;
        });
    }

    // delInput(index: number): void {
    //     const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
    //     arrayControl.removeAt(index);
    // }
}
