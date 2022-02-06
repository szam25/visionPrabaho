import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { FoundingsComponent } from './foundings/foundings.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { FooterComponent } from './footer/footer.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { EmpowermentComponent } from './empowerment/empowerment.component';
import { EqualityComponent } from './equality/equality.component';
import { LatestActivityComponent } from './latest-activity/latest-activity.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent,
    FoundingsComponent,
    GetInvolvedComponent,
    FooterComponent,
    OurWorkComponent,
    EducationComponent,
    EnvironmentDetailComponent,
    EmpowermentComponent,
    EqualityComponent,
    LatestActivityComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
