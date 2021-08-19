import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
   showanswer:boolean=false;
   sum:number=0;

   myForm:FormGroup;
  constructor(public form:FormBuilder) {    // build form dynamically creating DI
      this.myForm=form.group({});
   }
   // life cycle method this will call after constructor
  ngOnInit(): void {
    this.allQuestion.forEach(q=> {
        this.myForm?.addControl(q.question,this.form.control(""));
                                //user:new FormControl();
                                //q.question
    })
  }

  submit(){
    console.log(this.myForm.value);
    let answer_list=this.myForm.value;
    //console.log(answer_list["5+5"])
    let index=0;
    for ( let q of this.allQuestion){
    //  console.log(answer_list[q])
      if (answer_list[q.question]==q.correctAns){
        q.msg="correct answer";
        this.sum=this.sum+1;
        console.log(q.msg)
      }
    else{
     q.msg="wrong answer correct answer is "+q.correctAns;
       console.log(q.msg)
      }
    }
    //index=index+1;
    this.showanswer=true;
  }
  allQuestion=[
    {question:"5+5",ans1:"10",ans2:"11",ans3:"12",ans4:"13",correctAns:"10",msg:"1"},
    {question:"5-5",ans1:"0",ans2:"1",ans3:"2",ans4:"3",correctAns:"0",msg:"2"},
    {question:"10-5",ans1:"0",ans2:"1",ans3:"5",ans4:"3",correctAns:"5",msg:"3"},
    {question:"47-5",ans1:"7",ans2:"1",ans3:"42",ans4:"3",correctAns:"42",msg:"4"},
    {question:"59-5",ans1:"0",ans2:"1",ans3:"2",ans4:"54",correctAns:"54",msg:"5"},
    {question:"52-5",ans1:"0",ans2:"47",ans3:"2",ans4:"3",correctAns:"47",msg:"6"},
    {question:"45-5",ans1:"40",ans2:"1",ans3:"2",ans4:"3",correctAns:"40",msg:"7"},
    {question:"85-5",ans1:"0",ans2:"1",ans3:"2",ans4:"80",correctAns:"80",msg:"8"},
    {question:"15-5",ans1:"10",ans2:"1",ans3:"2",ans4:"3",correctAns:"10",msg:"9"},
    {question:"65-5",ans1:"0",ans2:"60",ans3:"2",ans4:"3",correctAns:"60",msg:"10"}

  ]

}
