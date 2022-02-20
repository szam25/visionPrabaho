import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { GetInvolvedComponent } from './get-involved.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    GetInvolvedComponent
  ],
  bootstrap: [GetInvolvedComponent]
})

export class GetInvolvedModule { }