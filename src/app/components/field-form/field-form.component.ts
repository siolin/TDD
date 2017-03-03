import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-form',
  templateUrl: 'field-form.component.html'
})
export class FieldFormComponent implements OnInit {

  @Input() data: any;
  @Input() group: any;

  constructor() {}

  ngOnInit() {

  }
}
