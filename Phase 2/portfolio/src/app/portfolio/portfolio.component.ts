import { Component, OnInit } from '@angular/core';
import {PortfolioserviceService} from "../portfolioservice.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  contactdata:Array<contact>=[]




portfolioref=new FormGroup({

   name:new FormControl(),number:new FormControl()
 })
  constructor(public pfservice:PortfolioserviceService) { }

  ngOnInit(): void {
  }
 portfolio(){
   let reg=this.portfolioref.value;
  let data=new contact()
   data.name=reg.name
   data.num=reg.number
   console.log("inside")

   this.contactdata[this.contactdata.length]=data;
  reg.reset();

  }


}

class contact{
public  name:string="";
public  num:number=0;
}
