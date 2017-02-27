import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  public metadata = {
    component: 'LoginFormComponent',
    title: 'Login',
    endpoint: 'api/hello',
    fields: [
      { name: 'login', label: 'Login', validators: [ 'required', 'minlength', 'maxlength' ] },
      { name: 'password', label: 'password', validators: [ 'minlength', 'maxlength' ] }
    ]
  };

  public loginForm: FormGroup;
  public formConfig = {};

  constructor(
    private fb: FormBuilder
    // @Inject(FormBuilder) fb: FormBuilder
  ) {}

  public ngOnInit() {
    this.metadata.fields.forEach((el) => {
      let validators = [];
      el.validators.forEach((validator) => {
        if (validator === 'required') {
          validators.push(Validators.required);
        }
      });
      // console.log(this.formConfig[el.name]);
      this.formConfig[el.name] = ['', [Validators.required, Validators.minLength(2)]];
    });

    console.log(this);

    this.loginForm = this.fb.group(this.formConfig);

  }
}
