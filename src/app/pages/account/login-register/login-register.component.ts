import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../../../services/snackBar/snackbar.service";
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";


@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
    isLogin: boolean = false;

    formGroupRegister!: FormGroup;
    formGroupLogin!: FormGroup;

    firstname: any;
    surname: any;
    email: any;
    password: any;
    confirmPassword: any;

    loginValid: boolean;

    private user: User[];


    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private snackbarService: SnackbarService,
        private userService: UserService
    ) {

    }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
            const action = params.get('action');
            if (action === 'login' || action === 'register') {
                this.isLogin = action === 'login';
            }
        });

        this.formGroupRegister = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
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
                console.log('data' ,data)
            }
        )

        console.log('ngOnInit',this.user)
    }

    onSubmit() {
        console.log('onSubmit')
        if (this.formGroupRegister.invalid) {
            console.log('form is invalid')
            this.snackbarService.showMsg('Form is invalid - check fields again');
            return;
        }

    }
}
