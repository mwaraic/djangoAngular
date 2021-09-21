import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnChanges, OnInit {
heading:string='';
myVa:boolean=true;

  constructor() { }
ngOnInit():void{
  document.designMode = "on";
  this.heading='Hey there, I am web-Developer|'
}
  ngOnChanges() {
    alert('value changed');


}

    
  }
  


