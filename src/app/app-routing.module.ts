import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DepartmentComponent } from './department/department.component';
import { LogoutComponent } from './logout/logout.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  { path: 'EmployeeDetailsComponent', component: EmployeeDetailsComponent },
  { path: 'AddEmployeeComponent', component: AddEmployeeComponent },
  { path: 'UpdateEmployeeComponent', component: UpdateEmployeeComponent },
  { path: 'DepartmentComponent', component: DepartmentComponent },
  { path: 'LogoutComponent', component: LogoutComponent }
  {path:'PrintComponent',component:PrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
