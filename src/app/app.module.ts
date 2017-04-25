import { PageItemComponent } from './components/page-item/page-item.component';
import { components } from './components/index';
import { services } from './services/index';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { SignaturePadModule } from 'angular2-signaturepad';
// import { SelectModule } from 'ng2-select';
import { SelectModule } from 'angular2-select';
// import { WebCamComponent } from 'ng2-webcam';
import { A2Edatetimepicker } from 'ng2-eonasdan-datetimepicker';
import 'eonasdan-bootstrap-datetimepicker';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AutocompleteDirective } from './directives/autocomplete.directive';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// import '../styles/styles.scss';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    PageItemComponent,
    // WebCamComponent,
    ...components
  ],
  imports: [ // import Angular's modules
    SelectModule,
    SignaturePadModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    A2Edatetimepicker,
    NguiAutoCompleteModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    ...services
  ],
  entryComponents: [
    ...components
  ]
})
export class AppModule {}
