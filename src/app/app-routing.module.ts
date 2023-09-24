import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PositionsComponent} from "./pages/positions/positions.component";
import {TechniquesComponent} from "./pages/techniques/techniques.component";
import {AccountComponent} from "./pages/account/account.component";
import {SourcesComponent} from "./pages/sources/sources.component";

const routes: Routes = [
  {path: '', redirectTo: '/positions', pathMatch: 'full'},
  {path: 'positions', component: PositionsComponent},
  {path: 'techniques', component: TechniquesComponent},
  {path: 'account', component: AccountComponent},
  {path: 'sources', component: SourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

