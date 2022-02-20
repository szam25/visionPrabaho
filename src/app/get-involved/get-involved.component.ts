import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})


export class GetInvolvedComponent implements OnInit {
  profileForm!: FormGroup;
  submitted :boolean = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name : ['', [Validators.required,Validators.minLength(4)]],
      email : ['', [Validators.required,Validators.email]],
      phNumber : ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    });
  }
  onSubmit() {
    if (this.profileForm.invalid) {
      this.submitted = true;
  }
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);//submit this value
    this.profileForm.reset();
  }
  get f() { return this.profileForm.controls; }
}
