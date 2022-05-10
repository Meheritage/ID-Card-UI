import { Component, OnInit } from '@angular/core';
import { FormControlName } from "@angular/forms";
import { refreshFilteredColsUid } from "@syncfusion/ej2-angular-grids";
import { SharedService } from '../shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName: any;
  Password: any;
  validuser="No";


  constructor(private service:SharedService,private router: Router) { }

  OnSubmit()
    {
      if(this.UserName=="HR" && this.Password=="hr12345" ||
         this.UserName=="Admin" && this.Password=="admin123" ||
         this.UserName=="Testing" && this.Password=="ts12345")
      {
        console.log(this.UserName);
        console.log(this.Password);
        alert("Login successfull");
        this.router.navigate(['./DashboardComponent']);
      }
      else
      {
        alert("UserName or password is incorrect");
        location.reload();
      }
      // this.service.CheckUser(fd).subscribe((data:string)=>{
      //   console.log(data);
      //   this.validuser = JSON.stringify(data);
      //   console.log(this.validuser);

      // if(this.validuser=="Yes")
      // {
      //   console.log(this.UserName);
      // }
      // else
      // {
      //   console.log(this.Password);
      // }
      // });


    }

  ngOnInit(): void {}

}
