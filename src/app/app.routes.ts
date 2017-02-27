import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageComponent } from './components/page/page.component';
import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: PageComponent, resolve: {data: DataResolver} }
];
