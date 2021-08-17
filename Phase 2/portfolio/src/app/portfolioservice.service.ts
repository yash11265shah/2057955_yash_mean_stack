import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {
  username: string = "";
  password: string = "";
  first_name: string = "";
  last_name: string = "";
  showloginform: boolean = false;
  showregistrationform: boolean = true;
  showportfolioform: boolean = false;
  errormsg:string="";


  constructor() {
  }

  register(fname: string, lname: string, username: string, password: string) {
    this.first_name = fname;
    this.last_name = lname;
    this.username = username;
    this.password = password;
    this.showloginform = true;
    this.showportfolioform = false;
    this.showregistrationform = false;

  }

  login(username: string, password: string) {
    console.log("pfservice log in")
    if (this.username == username && this.password == password) {
        this.showportfolioform=true;
        this.showregistrationform=false;
        this.showloginform=false;
    }
    else{
      this.showloginform=true;
      this.showregistrationform=false;
      this.showportfolioform=false;
      this.errormsg="invalid credentials";
    }

  }
  displayregistration(){
    this.showregistrationform=true;
    this.showportfolioform=false;
    this.showloginform=false;
  }
  displaylogin(){
    this.showregistrationform=false;
    this.showportfolioform=false;
    this.showloginform=true;
  }
}
