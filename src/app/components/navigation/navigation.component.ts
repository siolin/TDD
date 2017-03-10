import {
  Component,
  Input,
  // Injector,
  OnInit
} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {

  @Input() public class: boolean = false;
  @Input() public show: boolean = false;
  @Input() public data;

  // public data = this.injector.get('data');
  public dataLinks = [
    {
      title: 'test1',
      url: 'test1',
      children: [
        {
          title: 'test1.1',
          url: 'test1.1',
          children: []
        },
        {
          title: 'test1.2',
          url: 'test1.2',
          children: []
        },
        {
          title: 'test1.3',
          url: 'test1.3',
          children: []
        }
      ]
    },
    {
      title: 'test2',
      url: 'test2',
      children: [
        {
          title: 'test2.1',
          url: 'test2.1',
          children: [
            {
              title: 'test2.2',
              url: 'test2.2',
              children: []
            },
            {
              title: 'test2.3',
              url: 'test2.3',
              children: []
            }
          ]
        }
      ]
    }
  ];

  // constructor(
  //   // private injector: Injector
  // ) {}

  public ngOnInit() {
    if (this.data) {
      this.dataLinks = this.data;
    }
  }
}
