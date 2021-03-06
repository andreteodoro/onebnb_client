import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { Angular2TokenService } from 'angular2-token';
import { ResultsComponent } from './results/results.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { TalksListComponent } from './talks/talks-list/talks-list.component';
import { TalksChatComponent } from './talks/talks-chat/talks-chat.component';
import { PropertyTripsComponent } from './property/property-trips/property-trips.component';
import { ReservationDetailsComponent } from './reservation/reservation-details/reservation-details.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { PropertyFormComponent } from './property/property-form/property-form.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyReservationsComponent } from './property/property-reservations/property-reservations.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/resetPassword', component: ResetPasswordComponent },
  { path: 'user/updatePassword', component: UpdatePasswordComponent },
  { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService] },
  { path: 'user/show', component: UserShowComponent, canActivate: [Angular2TokenService] },
  { path: 'results', component: ResultsComponent },
  { path: 'property/new', component: PropertyFormComponent, canActivate: [Angular2TokenService]},
  { path: 'property/list', component: PropertyListComponent, canActivate: [Angular2TokenService] },
  { path: 'property/:id', component: PropertyDetailsComponent },
  { path: 'property/:id/reservation', component: ReservationDetailsComponent },
  { path: 'property/:id/reservations', component: PropertyReservationsComponent, canActivate: [Angular2TokenService] },
  { path: 'property/:id/edit', component: PropertyFormComponent, canActivate: [Angular2TokenService]},
  { path: 'talks', component: TalksListComponent, canActivate: [Angular2TokenService] },
  { path: 'talks/chat/:id', component: TalksChatComponent, canActivate: [Angular2TokenService] },
  { path: 'trips', component: PropertyTripsComponent, canActivate: [Angular2TokenService] },
  { path: '404', component: NotfoundComponent }
];

// Export the constant routing to be imported at the file app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
