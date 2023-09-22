import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PositionsComponent} from "./positions/positions.component";

const routes: Routes = [
  {path: '', redirectTo: '/positions', pathMatch: 'full'},
  {path: 'positions', component: PositionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

