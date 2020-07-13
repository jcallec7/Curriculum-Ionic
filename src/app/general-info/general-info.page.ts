import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../services/curriculum.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.page.html',
  styleUrls: ['./general-info.page.scss'],
})
export class GeneralInfoPage implements OnInit {

  user: Observable<any[]>
  
  constructor(private CurriculumService: CurriculumService) { }

  ngOnInit() {

    this.user = this.CurriculumService.getUsers()
    

  }

}
