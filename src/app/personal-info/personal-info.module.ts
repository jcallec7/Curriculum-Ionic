import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoPageRoutingModule } from './personal-info-routing.module';

import { PersonalInfoPage } from './personal-info.page';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { GpsComponent } from '../components/gps/gps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInfoPageRoutingModule
  ],
  declarations: [PersonalInfoPage, ImageUploadComponent, GpsComponent],
  exports: [ImageUploadComponent, GpsComponent]
})
export class PersonalInfoPageModule {}
