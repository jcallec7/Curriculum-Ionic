import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationInfoPage } from './education-info.page';

const routes: Routes = [
  {
    path: '',
    component: EducationInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationInfoPageRoutingModule {}
