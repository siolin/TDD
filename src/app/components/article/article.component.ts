import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

  public contents: string = '';

  constructor(
    private injector: Injector,
  ) {
    this.contents = this.injector.get('contents');
  }

  ngOnInit() { }
}
