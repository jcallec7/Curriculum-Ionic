import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobAspirationsInfoPage } from './job-aspirations-info.page';

const routes: Routes = [
  {
    path: '',
    component: JobAspirationsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobAspirationsInfoPageRoutingModule {}
