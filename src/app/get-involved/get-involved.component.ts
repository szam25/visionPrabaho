import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})


export class GetInvolvedComponent implements OnInit {
  profileForm = this.fb.group({
    name : ['', Validators.required],
    email : ['', [Validators.required,Validators.email]],
    phNumber : ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const NAME_REQUIRED = "Please enter your name";
    const EMAIL_REQUIRED = "Please enter your email";
    const EMAIL_INVALID = "Please enter a correct email address format";

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }
}
