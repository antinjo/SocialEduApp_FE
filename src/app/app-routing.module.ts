import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaksPageComponent } from './feature/components/faks-page/faks-page.component';
import { HomepageComponent } from './feature/components/homepage/homepage.component';
import { UserPageComponent } from './feature/components/user-page/user-page.component';
import { SubjectPageComponent } from './feature/components/subject-page/subject-page.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'fakspage',
    component:FaksPageComponent
  },
  {
    path: 'homepage', 
    component:HomepageComponent},
  {
    path: 'userpage', 
    component:UserPageComponent},
  {
      path: 'userpage/:name', 
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
