import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../services/snackBar/snackbar.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";
import {first} from "rxjs";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLoginView: boolean = false;

  formGroupRegister!: FormGroup;
  formGroupLogin!: FormGroup;

  private user: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const action = params.get('action');
      if (action === 'login' || action === 'register') {
        this.isLoginView = action === 'login';
      }
    });

    this.formGroupRegister = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.formGroupLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.userService.getUsers().subscribe((data: User[]) => {
        this.user = data;
        console.log('data', data)
      }
    )

    console.log('ngOnInit', this.user)
  }

  onSubmitRegister() {
    if (this.formGroupRegister.invalid) {
      console.log('form is invalid wHY?')
      console.log(this.formGroupRegister.valid)
      this.snackbarService.showMsg('Form is invalid - check fields again');
      return;
    }
    this.isLoginView = true;
  }

  onSubmitLogin() {
    this.userService.register(this.formGroupRegister.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.snackbarService.showMsg('Registration successful');
          this.router.navigate(['../../positions'], {relativeTo: this.route});

        },
        error: error => {
          this.snackbarService.showMsg(error);
        }
      });
  }
}
