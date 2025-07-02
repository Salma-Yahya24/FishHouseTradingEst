import { DashboardComponent } from './shared/additions/dashboard/dashboard.component';
import { FishCategoriesComponent } from './shared/pages/fish-categories/fish-categories.component';
import { FishTypesComponent } from './shared/pages/fish-types/fish-types.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loginGuard } from './core/guards/login/login.guard';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'products/list',
    component: FishTypesComponent
  },
  {
    path: 'products/categories',
    component: FishCategoriesComponent
  },
  {
    path: 'login', component: LoginComponent, canActivate: [loginGuard]
  }
];
