import { Component, OnInit, Inject, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

interface Metadata {
  component: string;
  title: string;
  endpoint: string;
  fields: [{
    name: string;
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
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  public query = '';
  public countries = [ 'Albania', 'Andorra'];
  public filteredList = [];
  public elementRef;

  public metadata = {
    component: 'LoginFormComponent',
    title: 'Login',
    endpoint: 'api/hello',
    fields: [
      {
        name: 'login',
        label: 'Login',
        validators: {
          required: true,
          minlength: 2,
          maxlength: 4
        }
      },
      {
        name: 'password',
        label: 'password',
        validators: {
          required: false,
          minlength: 2,
          maxlength: 16
        }
      }
    ]
  };

  public loginForm: FormGroup;
  public formConfig = {};

  constructor(
    private fb: FormBuilder,
    private myElement: ElementRef
  ) {
    this.elementRef = myElement;
  }

  public filter() {
    if (this.query !== '') {
        this.filteredList = this.countries.filter((el) => {
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        });
    } else {
        this.filteredList = [];
    }
  }

  public select(item) {
      this.query = item;
      this.filteredList = [];
  }

  @HostListener('document:click', ['$event'])
  public handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
        this.filteredList = [];
    }
  }

  public ngOnInit() {
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

    this.loginForm = this.fb.group(this.formConfig);

  }
}
