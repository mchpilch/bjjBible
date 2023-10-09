import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../services/snackBar/snackbar.service";
import {Technique} from "../../models/technique";

const mockTechniques: Technique[] = [
  {
    name: "Technika 1 - Balacha z dosiadu",
    description: "Opis techniki 1",
    stepData: [
      {name: "Krok 1 bd", desc: "podwin"},
      {name: "Krok 2 bd", desc: "wylam"},
    ],
  },
  {
    name: "Technika 2 - Duszenie ezekielem z dosiadu",
    description: "Opis techniki 2",
    stepData: [
      {name: "Krok 1 ed", desc: "oplec"},
      {name: "Krok 2 ed", desc: "wykoncz"},
    ],
  },
  // Dodaj więcej technik według potrzeb
];

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.css']
})

export class TechniquesComponent {
  mainFormGroup: FormGroup;

  currentStep: number = 0;

  showStepper: boolean = false;


  savedTechniques: Technique[] = mockTechniques;


  constructor(
    private _formBuilder: FormBuilder,
    private snackbarService: SnackbarService
  ) {
    this.mainFormGroup = this._formBuilder.group({
      techniqueName: ["tn"],//Validators.required
      techniqueDescription: ["td"],//Validators.required
      stepData: this._formBuilder.array([
        this._formBuilder.group({
          name: ["", Validators.required],
          desc: ["", Validators.required],
          // image: ["", Validators.required],
        })
      ])
    });
  }

  getStepDataControls() {
    return (this.mainFormGroup.get('stepData') as FormArray).controls;
  }

  addInput(currentIndex: number): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
    let curentStep = this._formBuilder.group({
      name: ["", Validators.required],
      desc: ["", Validators.required],
    });

    arrayControl.push(curentStep);

    setTimeout(() => {
      this.currentStep = currentIndex + 1;
    });
  }

  delInput(index: number): void {
    if (index > 0) {
      const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
      arrayControl.removeAt(index);
      this.snackbarService.showMsg('Item deleted successfully');
    } else {
      this.snackbarService.showMsg('Item cannot be  deleted');
    }
  }

  submit() {
    if (this.mainFormGroup.valid) {
      const formData = this.mainFormGroup.value;
      this.savedTechniques.push(formData);

      this.snackbarService.showMsg('Your technique was saved to db');
    } else {
      this.snackbarService.showMsg('Some fields in your technique are empty');
    }
  }
}
