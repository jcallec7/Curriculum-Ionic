import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Person } from '../class/person';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.page.html',
  styleUrls: ['./education-info.page.scss'],
})
export class EducationInfoPage implements OnInit {
  
  person: Person;

  constructor(public route: ActivatedRoute, public router: Router, private CurriculumService: CurriculumService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if(this.router.getCurrentNavigation().extras.state){
        this.person = this.router.getCurrentNavigation().extras.state.person
      }

    }) 

    this.person = {
      uid : ",",
      cedula : this.person.cedula,
      name: this.person.name,
      address : this.person.address,
      bornDate: this.person.bornDate,
      sex: this.person.sex,
      company: this.person.company,
      jobPosition: this.person.jobPosition,
      time: this.person.time,
      company2: this.person.company2,
      jobPosition2: this.person.jobPosition2,
      time2: this.person.time2,
      jobAspirations: this.person.jobAspirations,
      title3rd: "",
      title4th: ""
    }
    
  }

  redirect(){

    console.log(this.person)
    this.CurriculumService.insertUser(this.person)

    let extras: NavigationExtras ={
      state: {
        person: this.person
      }

    }

    this.router.navigate(['general-info'], extras)
  }
}
