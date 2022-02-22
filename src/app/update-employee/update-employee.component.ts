import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { dataBound } from "@syncfusion/ej2-angular-grids";
import { of } from "rxjs";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  OnFileSelected(event:any){
    console.log(event);
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoName=data.toString();
      this.PhotoFilePath=this.service.photoUrl+this.PhotoName;
      })
  }

  PhotoURL="http://localhost:57823/Photos/";

  Department=[ {name:'HR'},{name:'R & D'},{name:'Marketing'}];
  Dep:string='';
  
  Gender=[ {name:'Male'},{name:'Female'},{name:'Others'}];
  selected:string='';

  IDProofType=[{name:'Voter ID'},{name:'PassPort' },{name:'Driving License'}]; 
  proof:string='';

  BloodGroup=[{name:'A+'},{name:'A-'},{name:'B+'},{name:'B-'},{name:'O+'},{name:'O-'},{name:'AB+'},{name:'AB-'} ]; 
  blood:string='';

  EmpID: string='';
  EmpName: string='';
  DOB:string='';
  IDProofNumber: string='';
  emailID: string='';
  Phone: string='';
  EmpAddress: string='';
  PhotoName: string="Anonymous.png";
  PhotoFilePath:string='';
  employee: any ;
  
 
  constructor(
    private service:SharedService,
    private activatedRoute: ActivatedRoute,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

    OnSubmit(val: any)
    {   
        val.PhotoName=this.PhotoName; 
        console.log(val);
        this.service.updateEmployee(val).subscribe(result=>{alert(result.toString())});
   }

    ngOnInit(){
      this.activatedRoute.queryParams.subscribe(params => {
        this.EmpID = params['prop']
      });
      this.service.getEmp(this.EmpID.toString()).subscribe((val)=>{
        this.employee=val;
        console.log(this.employee);
      })  
    }

}
