import { Component, OnInit } from '@angular/core';
import { Person } from '../class/person';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-job-aspirations-info',
  templateUrl: './job-aspirations-info.page.html',
  styleUrls: ['./job-aspirations-info.page.scss'],
})
export class JobAspirationsInfoPage implements OnInit {

  person: Person

  constructor(public route: ActivatedRoute, public router: Router) { }
  
  
  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if(this.router.getCurrentNavigation().extras.state){
        this.person = this.router.getCurrentNavigation().extras.state.person
      }

    }) 

    this.person = {

      uid: "",
      cedula : this.person.cedula,
      name: this.person.name,
      address : this.person.address,
      bornDate: this.person.bornDate,
      sex: this.person.sex,
      company: "",
      jobPosition: "",
      time: "",
      company2: "",
      jobPosition2: "",
      time2: "",
      jobAspirations: "",
      title3rd: "",
      title4th: ""
    }

  }

  redirect(){

    let extras: NavigationExtras ={
      state: {
        person: this.person
      }

    }

    this.router.navigate(['education-info'], extras)
  }

}
