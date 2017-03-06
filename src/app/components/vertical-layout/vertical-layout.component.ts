import { Component, Injector } from '@angular/core';

@Component({
  selector: 'vartical-layout',
  templateUrl: 'vertical-layout.component.html'
})
export class VerticalLayoutComponent {

  public data = this.injector.get('children');

  constructor(
    private injector: Injector
  ) { }

}
