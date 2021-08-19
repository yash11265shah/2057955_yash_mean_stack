import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

data:Array<task>=[]

listref=new FormGroup({

   id:new FormControl(),name:new FormControl(), task:new FormControl(),deadline:new FormControl(),

 })
  constructor() { }

  ngOnInit(): void {
  }
 portfolio(){
   let reg=this.listref.value;
  let data=new task()
   data.id=reg.id
   data.name=reg.name
   data.task=reg.task
   data.deadline=reg.deadline
   console.log("inside")

   this.data[this.data.length]=data;
  reg.reset();
  }
}
class task{
public  id:string="";
public  name:string="";
public task:string="";
public deadline:string="";
}

