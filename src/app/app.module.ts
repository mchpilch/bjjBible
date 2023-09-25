import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {PositionsComponent} from './pages/positions/positions.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, RouterOutlet} from "@angular/router";
import {TechniquesComponent} from './pages/techniques/techniques.component';
import {AccountComponent} from './pages/account/account.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {SourcesComponent} from './pages/sources/sources.component';
import {PositionDetailsComponent} from "./pages/positionDetails/position-details.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {MockDataService} from './services/mockDb/mock-data.service';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    TechniquesComponent,
    AccountComponent,
    SourcesComponent,
    PositionDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule,
    MatGridListModule,
    NgOptimizedImage,
    MatListModule,
    InMemoryWebApiModule.forRoot(MockDataService),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
