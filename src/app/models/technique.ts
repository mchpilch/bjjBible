import {StepperStep} from "./stepper-step";

export interface Technique {
  name: string;
  description: string;
  steps: StepperStep[];
}
