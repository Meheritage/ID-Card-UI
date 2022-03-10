import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas'
import { NgxPrintModule } from "ngx-print";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  EmpID: string='';
  employee:any;
  IDCardpath: string=''; 
  PhotoName: string='';
  PhotoURL="http://localhost:57823/Photos/";

  constructor(
    private service:SharedService,
    private activatedRoute: ActivatedRoute,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.EmpID = params['prop'] });
    this.service.getEmp(this.EmpID.toString()).subscribe((val)=>{
      this.employee=val });
      this.IDCardpath=this.service.photoUrl+"ID Card.jpg";
  }

}
