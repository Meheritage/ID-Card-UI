import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { SharedService } from '../shared.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  photopath: any;

  constructor(private service:SharedService) { }

  Employee:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  deleteClick(EmpID:string){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(EmpID).subscribe(data=>{alert(data.toString());
      this.refreshDepList();
      })
    }

  }

  refreshDepList(){
    this.service.getEmpList().subscribe(data=>{
       this.Employee=data; })
  }

}
