import { Component, OnInit } from '@angular/core';
import {PortfolioserviceService} from "../portfolioservice.service";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginref=new FormGroup({
  username:new FormControl(), password:new FormControl()

 })
  constructor(public pfservice:PortfolioserviceService) {}


  ngOnInit(): void {
  }

  login(){
   let reg=this.loginref.value;
   console.log("inside login")
   this.pfservice.login(reg.username,reg.password);
  }

  displaysignup(){
   this.pfservice.displayregistration();
  }
}
