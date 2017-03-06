import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;

  public multiple0: boolean = false;
  public multiple1: boolean = true;
  public options0: T[] = [];
  public options1: T[] = [];
  public selection: string[] = [];

  // @ViewChild('preSingle') preSingle;
  // @ViewChild('preMultiple') preMultiple;

  public logSingleString: string = '';
  public logMultipleString: string = '';

  constructor() {

      let numOptions = 100;
      let opts = new Array(numOptions);

      for (let i = 0; i < numOptions; i++) {
          opts[i] = {
              value: i.toString(),
              label: i.toString()
          };
      }

      this.options0 = opts.slice(0);
      this.options1 = opts.slice(0);
  }

  public ngOnInit() {
      this.form = new FormGroup({});
      this.form.addControl('selectSingle', new FormControl(''));
      this.form.addControl('selectMultiple', new FormControl(''));
  }

  public onSingleOpened() {
      // this.logSingle('- opened');
  }

  public onSingleClosed() {
      // this.logSingle('- closed');
  }

  public onSingleSelected(item) {
      // this.logSingle('- selected (value: ' + item.value  + ', label:' +
                     // item.label + ')');
  }

  public onSingleDeselected(item) {
      // this.logSingle('- deselected (value: ' + item.value  + ', label:' +
                     // item.label + ')');
  }

  public onMultipleOpened() {
      // this.logMultiple('- opened');
  }

  public onMultipleClosed() {
      // this.logMultiple('- closed');
  }

  public onMultipleSelected(item) {
    // console.log(item);
    this.selection.push(item.value);
      // this.logMultiple('- selected (value: ' + item.value  + ', label:' +
                     // item.label + ')');
  }

  public onMultipleDeselected(item) {
      // this.logMultiple('- deselected (value: ' + item.value  + ', label:' +
                     // item.label + ')');
  }

  private scrollToBottom(elem) {
      elem.scrollTop = elem.scrollHeight;
  }
}
