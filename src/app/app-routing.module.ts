import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PositionsComponent} from "./positions/positions.component";
import {TechniquesComponent} from "./techniques/techniques.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {path: '', redirectTo: '/positions', pathMatch: 'full'},
  {path: 'positions', component: PositionsComponent},
  {path: 'techniques', component: TechniquesComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

