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
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {SourcesComponent} from './pages/sources/sources.component';
import {PositionDetailsComponent} from "./pages/position-details/position-details.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {MockDataService} from './services/mock-db/mock-data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CompetitorsComponent} from './pages/competitors/competitors.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {
    LoginRegisterQuestionDialogComponent
} from './services/dialogs/login-register-question/login-register-question-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LoginRegisterComponent} from './pages/account/login-register/login-register.component';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {SpinnerComponent} from './services/loader/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoaderInterceptor} from "./services/loader/interceptors/loader.interceptor";
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {LogoutQuestionComponent} from './services/dialogs/logout-question/logout-question.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
    declarations: [
        AppComponent,
        PositionsComponent,
        TechniquesComponent,
        AccountComponent,
        SourcesComponent,
        PositionDetailsComponent,
        CompetitorsComponent,
        LoginRegisterQuestionDialogComponent,
        LoginRegisterComponent,
        SpinnerComponent,
        AboutMeComponent,
        LogoutQuestionComponent,
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
        HttpClientModule,
        MatCardModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        MatSliderModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        CommonModule,
        FlexLayoutModule
    ],
    providers: [AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
