import { PageComponent } from './components/page/page.component';
import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '**', component: PageComponent, resolve: {data: DataResolver} }
];
