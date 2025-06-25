import { DashboardComponent } from './shared/additions/dashboard/dashboard.component';
import { FishTypesComponent } from './shared/pages/fish-types/fish-types.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products/list',
    component: FishTypesComponent
  }
];
