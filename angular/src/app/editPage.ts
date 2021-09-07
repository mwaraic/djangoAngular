import { introductionInterface } from './introduction';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntroductionData } from './introduction';


@Component({
  selector: 'app-testPage',
  template: `<div *ngFor='let intro of intr'>
  {{intro.id}}
  {{intro.first_name}}
  {{intro.last_name}}
  
  </div>`

})

  export class EditPageComponent implements OnInit {
intr:introductionInterface[];

    ngOnInit() {
        this.intr=IntroductionData;
    }

  }