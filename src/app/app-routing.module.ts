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
import { DonateComponent } from './donate/donate.component';
import { ResourcesesComponent } from './resourceses/resourceses.component';
import {PlasticUseComponent} from './plastic-use/plastic-use.component';
import { KgpChronicalComponent } from './kgp-chronical/kgp-chronical.component';
import { WhoGuidelinesComponent } from './who-guidelines/who-guidelines.component';
import { OtherActivityComponent } from './other-activity/other-activity.component';
import { UnNailingTreesComponent } from './un-nailing-trees/un-nailing-trees.component';
import { MangroveComponent } from './mangrove/mangrove.component';

const routes: Routes = [
  {path: 'aboutUS', component: VisionComponent},
  {path: 'getInvolved', component: GetInvolvedComponent},
  {path: '', component: HomeComponent},
  {path:"ourWork", component: OurWorkComponent},
  {path:"workEducationDetails", component: EducationComponent},
  {path:"workEmpowermentDetails", component: EmpowermentComponent},
  {path:"workEnvirontmentDetails", component: EnvironmentDetailComponent},
  {path:"workEqualityDetails", component: EqualityComponent},
  {path:"donatePage", component: DonateComponent},
  {path:"resourcePage",component: ResourcesesComponent},
  {path:"plasticfree",component: PlasticUseComponent},
  {path:"kgpChronical",component:KgpChronicalComponent},
  {path:"whoGuideline",component:WhoGuidelinesComponent},
  {path:"otherActivity",component:OtherActivityComponent},
  {path:"unnailingTrees",component:UnNailingTreesComponent},
  {path:"mangrove",component:MangroveComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
