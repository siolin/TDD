import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  EventEmitter,
  Output
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  animations: [
    trigger('heroState', [
      state('inactive', style({
        left: '-200px'
      })),
      state('active', style({
        left: '0'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ],
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public state: string = 'inactive';

  public toggle() {
    if (this.state === 'active') {
      this.state = 'inactive';
    } else if (this.state === 'inactive') {
      this.state = 'active';
      this.state.toString();
    }
  }
}
