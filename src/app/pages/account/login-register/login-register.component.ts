import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
    isLogin: boolean = false;

    constructor(
        private route: ActivatedRoute,
    ) {
        console.log('constructor')
        console.log(this.isLogin)
    }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
            const action = params.get('action');
            if (action === 'login' || action === 'register') {
                this.isLogin = action === 'login';
            }
        });
    }

    onSubmit() {

    }
}
