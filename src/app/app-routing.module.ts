import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PositionsComponent} from "./pages/positions/positions.component";
import {TechniquesComponent} from "./pages/techniques/techniques.component";
import {AccountComponent} from "./pages/account/account.component";
import {SourcesComponent} from "./pages/sources/sources.component";
import {PositionDetailsComponent} from "./pages/positionDetails/position-details.component";
import {CompetitorsComponent} from "./pages/competitors/competitors.component";
import {LoginRegisterComponent} from "./pages/account/login-register/login-register.component";
import {authGuard} from "./services/authentication/guard/auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/positions', pathMatch: 'full'},
    {path: 'positions', component: PositionsComponent},
    {path: 'positions/position-details', component: PositionDetailsComponent},
    {path: 'techniques', component: TechniquesComponent, canActivate:[authGuard]}, //canActivate so you can't get there if not logged in via pure url path
    {path: 'competitors', component: CompetitorsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'account/login-register', component: LoginRegisterComponent},
    {path: 'sources', component: SourcesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

