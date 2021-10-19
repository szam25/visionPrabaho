import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {path: 'aboutUS', component: VisionComponent},
  {path: 'getInvolved', component: GetInvolvedComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
