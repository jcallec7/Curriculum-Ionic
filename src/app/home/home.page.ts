import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  redirect(){
    this.router.navigate(['personal-info'])
  }
  redirect2(){
    this.router.navigate(['about'])
  }

}
