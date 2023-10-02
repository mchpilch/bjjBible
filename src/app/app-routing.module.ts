import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PositionsComponent} from "./pages/positions/positions.component";
import {TechniquesComponent} from "./pages/techniques/techniques.component";
import {AccountComponent} from "./pages/account/account.component";
import {SourcesComponent} from "./pages/sources/sources.component";
import {PositionDetailsComponent} from "./pages/positionDetails/position-details.component";
import {CompetitorsComponent} from "./pages/competitors/competitors/competitors.component";

const routes: Routes = [
  {path: '', redirectTo: '/positions', pathMatch: 'full'},
  {path: 'positions', component: PositionsComponent},
  {path: 'positions/position-details', component: PositionDetailsComponent},
  {path: 'techniques', component: TechniquesComponent},
  {path: 'competitors', component: CompetitorsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'sources', component: SourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

