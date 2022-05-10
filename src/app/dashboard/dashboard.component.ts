import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions,Chart } from 'chart.js';
import { data } from "jquery";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor() { }

  ngOnInit(){
    const PieChart=new Chart ('piechart',{
      type:'pie',
      data:{
        labels:["Blue","Green","Pink"],
        datasets:[{
          label:'Vote Now',
          data:[201,102,50],
          backgroundColor:[
            'rgba(40,23,244,0.9)',
            'rgba(192,255,0,0.9)',
            'rgba(239,23,240,0.9)'],
                 }]
           },
      options:{
         scales:{
           y:{
               beginAtZero: true
             }
                }
              }


    });

  }

}
