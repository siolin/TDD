import { Component, Injector } from '@angular/core';

@Component({
  selector: 'horizontal-layout',
  templateUrl: 'horizontal-layout.component.html'
})
export class HorizontalLayoutComponent {

  public data = [];

  constructor(
    private injector: Injector
  ) {
    this.data = this.injector.get('children');
  }

}
