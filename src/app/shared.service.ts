import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:57823/api/employee/";
  readonly photoUrl = "http://localhost:57823/Photos/";
  readonly DepUrl = "http://localhost:57823/api/department/";
  readonly LoginUrl="http://localhost:57823/api/login/CheckUser";

  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl);
  }

  getEmp(id: string): Observable<any> {
    return this.http.get<any>(this.APIUrl + id);
  }

  addEmployee(emp: any) {
    return this.http.post(this.APIUrl, emp);
  }

  updateEmployee(emp: any) {
    return this.http.put(this.APIUrl, emp);
  }

  deleteEmployee(emp: any) {
    return this.http.delete(this.APIUrl + emp);
  }

  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + 'savefile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'GetaAllDepartmentName')
  }

  addDepartment(dep: any) {
    return this.http.post(this.DepUrl, dep);
  }

  getDep(name: string): Observable<any> {
    return this.http.get<any>(this.DepUrl + name);
  }

  updateDepartment(dep: any) {
    return this.http.put(this.DepUrl, dep);
  }

  getAllDepartment(): Observable<any[]> {
    return this.http.get<any[]>(this.DepUrl + 'GetaAllDepartmentName')
  }

  getDepartment(id: string): Observable<any> {
    return this.http.get<any>(this.DepUrl + id);
  }

  CheckUser(un:any): Observable<any>{
    return this.http.post<any>(this.LoginUrl,un);
  }
}
