import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PositionsComponent } from './positions/positions.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, RouterOutlet} from "@angular/router";
import { TechniquesComponent } from './techniques/techniques.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    TechniquesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
