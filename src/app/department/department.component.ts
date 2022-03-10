import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dep_hide: boolean = true;
  Department: any = [];
  depselected: any;
  DepDetails: any = [];
  Code: string = '';
  Name: string = '';
  Description: string = '';
  DepID: string = '';


  constructor(private service: SharedService) { }

  OnSubmit(frm: any) {

    console.log(frm);
    this.service.addDepartment(frm).subscribe(result => { alert(result.toString()) });

  }
  update(frm: any) {
    console.log(frm)
    this.service.updateDepartment(frm).subscribe(result => { alert(result.toString()) });

  }
  edit(val: any) {
    console.log(val);
    this.service.getDepartment(val).subscribe((val) => {
      this.DepDetails = val;
      this.dep_hide = false;
      console.log(this.DepDetails);
    });

  }





  ngOnInit(): void {
    this.service.getAllDepartment().subscribe((data: any) => {
      this.Department = data;

    });
    this.service.getDep(this.Name.toString()).subscribe((val) => {
      this.Department = val;
      console.log(this.Department);
    });

  }

}
