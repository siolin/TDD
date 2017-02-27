import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'vartical-layout',
  templateUrl: 'vertical-layout.component.html'
})
export class VerticalLayoutComponent implements OnInit {

  public data = this.injector.get('children');

  constructor(
    private injector: Injector
  ) { }

  public ngOnInit() {}
}
