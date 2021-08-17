import { Component, OnInit } from '@angular/core';
import {PortfolioserviceService} from "../portfolioservice.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 registerref=new FormGroup({
   fname:new FormControl(),lname:new FormControl(),username:new FormControl(), password:new FormControl()

 })
  constructor(public pfservice:PortfolioserviceService) { }

  register(){
   let reg=this.registerref.value;
   console.log(reg.fname)
    console.log("inside register")
   this.pfservice.register(reg.fname,reg.lname,reg.username,reg.password);
  }

  showlogin(){
   this.pfservice.displaylogin();
  }

  ngOnInit(): void {
  }

}
