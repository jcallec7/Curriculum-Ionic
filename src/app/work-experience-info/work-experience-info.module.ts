import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkExperienceInfoPageRoutingModule } from './work-experience-info-routing.module';

import { WorkExperienceInfoPage } from './work-experience-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkExperienceInfoPageRoutingModule
  ],
  declarations: [WorkExperienceInfoPage]
})
export class WorkExperienceInfoPageModule {}
