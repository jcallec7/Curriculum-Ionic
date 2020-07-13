import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobAspirationsInfoPageRoutingModule } from './job-aspirations-info-routing.module';

import { JobAspirationsInfoPage } from './job-aspirations-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobAspirationsInfoPageRoutingModule
  ],
  declarations: [JobAspirationsInfoPage]
})
export class JobAspirationsInfoPageModule {}
