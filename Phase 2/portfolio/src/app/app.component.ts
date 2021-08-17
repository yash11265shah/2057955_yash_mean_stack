import { Component } from '@angular/core';
import {PortfolioserviceService} from "./portfolioservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   constructor(public pfservice:PortfolioserviceService) {}
  title = 'portfolio';
}
