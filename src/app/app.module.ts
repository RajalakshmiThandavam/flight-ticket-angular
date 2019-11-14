import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';
// import { ReactiveFormsModule }    from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';


import { AvatarModule } from 'ngx-avatar';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CcCardHoverDirective } from './_directives/cc-card-hover.directive';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home/home.module';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { AngularMaterialModule } from './_shared-Module/angular-material/angular-material.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleFlightsComponent } from './schedule-flights/schedule-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginDialogComponent,
    AlertComponent,
    FlightDetailsComponent,
    CcCardHoverDirective,
    SideNavComponent,
    BookingStatusComponent,
    NewUserComponent,
    BookFlightsComponent,
    UserProfileComponent,
    ScheduleFlightsComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,   
    HttpClientModule,
    FormsModule,
    HomeModule,

    AngularMaterialModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
   ],
  entryComponents: [ LoginDialogComponent ]
})
export class AppModule { }
