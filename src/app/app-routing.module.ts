import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DepartmentComponent } from './department/department.component';
const routes: Routes = [
  { path: 'EmployeeDetailsComponent', component: EmployeeDetailsComponent },
  { path: 'AddEmployeeComponent', component: AddEmployeeComponent },
  { path: 'UpdateEmployeeComponent', component: UpdateEmployeeComponent },
  { path: 'DepartmentComponent', component: DepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
