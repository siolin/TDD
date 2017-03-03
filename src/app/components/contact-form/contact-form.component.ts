import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

    multiple0: boolean = false;
    multiple1: boolean = true;
    options0: Array<any> = [];
    options1: Array<any> = [];
    selection: Array<string> = [];

    // @ViewChild('preSingle') preSingle;
    // @ViewChild('preMultiple') preMultiple;

    logSingleString: string = '';
    logMultipleString: string = '';

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

    ngOnInit() {
        this.form = new FormGroup({});
        this.form.addControl('selectSingle', new FormControl(''));
        this.form.addControl('selectMultiple', new FormControl(''));
    }

    onSingleOpened() {
        // this.logSingle('- opened');
    }

    onSingleClosed() {
        // this.logSingle('- closed');
    }

    onSingleSelected(item) {
        // this.logSingle('- selected (value: ' + item.value  + ', label:' +
                       // item.label + ')');
    }

    onSingleDeselected(item) {
        // this.logSingle('- deselected (value: ' + item.value  + ', label:' +
                       // item.label + ')');
    }

    onMultipleOpened() {
        // this.logMultiple('- opened');
    }

    onMultipleClosed() {
        // this.logMultiple('- closed');
    }

    onMultipleSelected(item) {
      // console.log(item);
      this.selection.push(item.value);
        // this.logMultiple('- selected (value: ' + item.value  + ', label:' +
                       // item.label + ')');
    }

    onMultipleDeselected(item) {
        // this.logMultiple('- deselected (value: ' + item.value  + ', label:' +
                       // item.label + ')');
    }

    // private logSingle(msg: string) {
    //     this.logSingleString += msg + '\n';

    //     // Let change detection do its work before scrolling to div bottom.
    //     setTimeout(() => {
    //         this.scrollToBottom(this.preSingle.nativeElement);
    //     });
    // }

    // private logMultiple(msg: string) {
    //     this.logMultipleString += msg + '\n';

    //     // Let change detection do its work before scrolling to div bottom.
    //     setTimeout(() => {
    //         this.scrollToBottom(this.preMultiple.nativeElement);
    //     });
    // }

    private scrollToBottom(elem) {
        elem.scrollTop = elem.scrollHeight;
    }
}
