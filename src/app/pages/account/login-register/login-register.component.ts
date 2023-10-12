import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../services/snackBar/snackbar.service";
import {ValidationService} from "../../../services/validation/validation.service";
import {MockDataService} from "../../../services/mockDb/mock-data.service";
import {User} from "../../../models/user";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLoginView: boolean = false;

  formGroupRegister!: FormGroup;
  formGroupLogin!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private mockDataService: MockDataService,
  ) {
    this.route.queryParamMap.subscribe(params => {
      const action = params.get('action');
      if (action === 'login' || action === 'register') {
        this.isLoginView = action === 'login';
      }
    });
  }

  ngOnInit(): void {
    this.formGroupRegister = this.formBuilder.group({
        firstname: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]], //TODO: hint not working as expected issue FIELD_KEY: [INITIAL_VALUE, [LIST_OF_VALIDATORS]]
      },
      {
        validator: ValidationService.createEqualsValidator()
      });

    this.formGroupLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitRegister() {
    if (this.formGroupRegister.invalid) {
      console.log(this.formGroupRegister.valid)
      this.snackbarService.showMsg('Form is invalid - check fields again');
      return;
    }

    this.mockDataService.addUser(this.formGroupRegister).subscribe(
      (user: User) => {
        this.snackbarService.showMsg('Registration successful');
        console.log('User added:', user);
      }
    );
    this.isLoginView = true;
  }

  onSubmitLogin() {
    this.mockDataService.checkUserCredentials(this.formGroupLogin).subscribe(
      (user) => {
        if(user){
          console.log('User authenticated:', user);
          this.router.navigate(['../../positions'], {relativeTo: this.route});
          this.snackbarService.showMsg('Login successful');
        }
        else{
          console.log('onSubmitLogin-checkUserCredentials-', user);
          this.snackbarService.showMsg('Wrong Credentials');
        }
      }
    );


    console.log('ALL USERS FROM DB: ', this.mockDataService.getUsersAll());

  }

  clearAllFormControls() {
    this.formGroupRegister.reset();
    this.formGroupLogin.reset();
  }
}
