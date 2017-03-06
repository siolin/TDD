import { SignatureComponent } from './components/signature/signature.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageComponent } from './components/page/page.component';
import { RegistrationFormComponent }
  from './components/registration-form/registration-form.component';
import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '**', component: PageComponent, resolve: {data: DataResolver} }
];
