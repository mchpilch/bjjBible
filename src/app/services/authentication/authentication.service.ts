import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private _userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this._userLoggedIn.asObservable();
  setUserLoggedIn(value: boolean) {
    this._userLoggedIn.next(value);
  }
}
