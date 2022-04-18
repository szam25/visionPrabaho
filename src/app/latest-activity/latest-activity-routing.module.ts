import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { EmpowermentComponent } from '../empowerment/empowerment.component';
import { EnvironmentDetailComponent } from '../environment-detail/environment-detail.component';
import { EqualityComponent } from '../equality/equality.component';



const routes: Routes = [
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
