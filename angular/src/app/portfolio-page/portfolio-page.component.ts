
import { Component, OnInit } from '@angular/core';


import { introductionInterface,myData, } from '../shopping-item.interface';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
mydata:introductionInterface[]=[];

  constructor() { }

  ngOnInit(): void {
    this.mydata=myData;
    
  }

}
