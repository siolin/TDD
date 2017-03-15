import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

  public contents: string = '';
  private service1Url = 'http://' + process.env.API_URL + ':3000/api/service1';

  constructor(
    private injector: Injector,
  ) {}

  public ngOnInit() {
    console.log(this.service1Url);
    this.contents = this.injector.get('contents');
  }
}
