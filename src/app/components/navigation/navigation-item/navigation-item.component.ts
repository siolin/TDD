import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-item',
  templateUrl: 'navigation-item.component.html'
})
export class NavigationItemComponent implements OnInit {

  @Input() public data;

  constructor() {}

  public ngOnInit() {
    console.log(this.data);
  }
}
