import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HistoryComponent } from './modules/history/history.component';
import { RegisterTitheComponent } from './modules/register-tithe/register-tithe.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'register-tithe',
    component: RegisterTitheComponent,
  },
  {
    path: 'management',
    component: UserManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
