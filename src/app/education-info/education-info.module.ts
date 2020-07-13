import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationInfoPageRoutingModule } from './education-info-routing.module';

import { EducationInfoPage } from './education-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationInfoPageRoutingModule
  ],
  declarations: [EducationInfoPage]
})
export class EducationInfoPageModule {}
