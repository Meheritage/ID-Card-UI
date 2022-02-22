import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../shared.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit
{
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

  Department=[ {name:'HR'},{name:'R & D'},{name:'Marketing'}];
  Dep:string='';

  Gender=[ {name:'Male'},{name:'Female'},{name:'Others'}];
  selected:string='';

  IDProofType=[{name:'Voter ID'},{name:'PassPort' },{name:'Driving License'}]; 
  proof:string='';

  BloodGroup=[{name:'A+'},{name:'A-'},{name:'B+'},{name:'B-'},{name:'O+'},{name:'O-'},{name:'AB+'},{name:'AB-'} ]; 
  blood:string='';

  PhotoName: string='Anonymous.png';
  PhotoFilePath: string='';
 
  constructor(private service:SharedService) { }

    OnSubmit(frm: any)
    {    
        frm.PhotoName=this.PhotoName;
        console.log(frm);
        this.service.addEmployee(frm).subscribe(result=>{alert(result.toString())});
      }

    ngOnInit(): void{
      this.PhotoFilePath=this.service.photoUrl+this.PhotoName;
    }
  
}