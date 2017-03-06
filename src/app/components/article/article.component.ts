import { Component, Injector } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: 'article.component.html'
})
export class ArticleComponent {

  public contents: string = '';

  constructor(
    private injector: Injector,
  ) {
    this.contents = this.injector.get('contents');
  }
}
