import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { EducationComponent } from './education/education.component';
import { EmpowermentComponent } from './empowerment/empowerment.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { EqualityComponent } from './equality/equality.component';


const routes: Routes = [
  {path: 'aboutUS', component: VisionComponent},
  {path: 'getInvolved', component: GetInvolvedComponent},
  {path: '', component: HomeComponent},
  {path:"ourWork", component: OurWorkComponent},
  {path:"workEducationDetails", component: EducationComponent},
  {path:"workEmpowermentDetails", component: EmpowermentComponent},
  {path:"workEnvirontmentDetails", component: EnvironmentDetailComponent},
  {path:"workEqualityDetails", component: EqualityComponent}
  
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
