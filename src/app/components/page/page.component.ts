import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page',
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit {

  public data: any;

  constructor(
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.data = data;
    });
  }
}
