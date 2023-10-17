import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {inject} from "@angular/core";
import {map} from "rxjs";

export const authGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);

  return authenticationService.userLoggedIn$.pipe(
    map((isUserLoggedIn: boolean) => {
      if (isUserLoggedIn) {
        console.log('Zalogowany - możesz wejść');
        return true;
      } else {
        console.log('Nie zalogowany - nie możesz wejść');
        alert('Nie zalogowany - nie możesz wejść');
        return false;
      }
    })
  );
};
