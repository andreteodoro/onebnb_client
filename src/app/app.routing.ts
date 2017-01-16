import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { Angular2TokenService } from 'angular2-token';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/resetPassword', component: ResetPasswordComponent },
  { path: 'user/updatePassword', component: UpdatePasswordComponent },
  { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService] }
];

// Export the constant routing to be imported at the file app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
