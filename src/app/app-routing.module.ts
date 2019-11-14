import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './_guards';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { BookFlightsComponent } from './book-flights/book-flights.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleFlightsComponent } from './schedule-flights/schedule-flights.component';
import { Role } from './_models/Role';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  {
     path: 'flight-details', 
     component: FlightDetailsComponent, 
    //  canActivate: [AuthGuard]
  },
  { path: 'schedule-flights', 
    component: ScheduleFlightsComponent, 
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] } 
  },
  { path: 'booking-status', component: BookingStatusComponent},
  { path: 'new-user', component: NewUserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'book-flights/:id', 
    component: BookFlightsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
