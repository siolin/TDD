import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface Metadata {
  component: string;
  title: string;
  endpoint: string;
  fields: [{
    name: string;
    type: string;
    label: string;
    validators: Validation;
  }];
}

interface Validation {
  required?: boolean;
  minlength?: number;
  maxlength?: number;
}

@Component({
  selector: 'registration-form',
  templateUrl: 'registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {

  public metadata: Metadata = {
    component: 'LoginFormComponent',
    title: 'Login',
    endpoint: 'api/hello',
    fields: [
      {
        name: 'login',
        type: 'text',
        label: 'Login',
        validators: { required: true, minlength: 2, maxlength: 4 }
      },
      {
        name: 'password',
        type: 'password',
        label: 'password',
        validators: { required: false, minlength: 2, maxlength: 16 }
      }
    ]
  };

  public registrationForm: FormGroup;
  public formConfig = {};

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.metadata.fields.forEach((el) => {
      let validators = [];
      if (el.validators.required) {
        validators.push(Validators.required);
      }
      if (el.validators.minlength) {
        validators.push(Validators.minLength(el.validators.minlength));
      }
      if (el.validators.maxlength) {
        validators.push(Validators.maxLength(el.validators.maxlength));
      }

      this.formConfig[el.name] = ['', validators];
    });

    this.registrationForm = this.fb.group(this.formConfig);
  }
}
