import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaksPageComponent } from './feature/components/faks-page/faks-page.component';
import { HomepageComponent } from './feature/components/homepage/homepage.component';
import { UserPageComponent } from './feature/components/user-page/user-page.component';
import { SubjectPageComponent } from './feature/components/subject-page/subject-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'fakspage',
    component:FaksPageComponent
  },
  {
    path: '', 
    component:HomepageComponent},
  {
    path: 'userpage', 
    component:UserPageComponent},
  {
    path: 'subjectpage', 
    component:SubjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
