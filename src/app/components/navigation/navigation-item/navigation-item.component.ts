import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-item',
  templateUrl: 'navigation-item.component.html'
})
export class NavigationItemComponent {

  @Input() public data;

}
