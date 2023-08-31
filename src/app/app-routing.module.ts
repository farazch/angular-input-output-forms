import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';

import { authGuardGuard } from './core/guards/auth-guard.guard';



const routes: Routes = [
  {path:'',component: HomeComponent,pathMatch:'full'},
  {path:'Dept',component: DepartmentsComponent,canActivate:[authGuardGuard] },
  {path:'Emp',component: EmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
