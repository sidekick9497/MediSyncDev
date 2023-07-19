import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [{
  'path': '', component: LoginComponent
}, {
  'path': 'dashboard', component: DashboardComponent
}, {
  'path': 'projects', component: ProjectComponent
  }, {
    'path': 'claims', component: ClaimsComponent
  }, {
    'path': 'profile', component: ProfileComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
