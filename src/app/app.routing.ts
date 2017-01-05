import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

// Export the constant routing to be imported at the file app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
