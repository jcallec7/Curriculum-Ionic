import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'general-info',
    loadChildren: () => import('./general-info/general-info.module').then( m => m.GeneralInfoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'education-info',
    loadChildren: () => import('./education-info/education-info.module').then( m => m.EducationInfoPageModule)
  },
  {
    path: 'job-aspirations-info',
    loadChildren: () => import('./job-aspirations-info/job-aspirations-info.module').then( m => m.JobAspirationsInfoPageModule)
  },
  {
    path: 'work-experience-info',
    loadChildren: () => import('./work-experience-info/work-experience-info.module').then( m => m.WorkExperienceInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
