import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkExperienceInfoPage } from './work-experience-info.page';

const routes: Routes = [
  {
    path: '',
    component: WorkExperienceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExperienceInfoPageRoutingModule {}
