import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-form',
  templateUrl: 'field-form.component.html'
})
export class FieldFormComponent {

  @Input() public data: any;
  @Input() public group: any;

}
