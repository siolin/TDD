import { Component, OnInit, Injector, ElementRef } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

  public contents: string = '';

  constructor(
    private injector: Injector,
    private el: ElementRef
  ) {
    this.contents = this.injector.get('contents');
    el.nativeElement.innerHTML = this.contents;
  }

  ngOnInit() { }
}
