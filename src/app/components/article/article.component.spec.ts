import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, Injector, NO_ERRORS_SCHEMA }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

// test component
import { ArticleComponent } from './article.component';

// describe test
describe('Article component', () => {

  let comp: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let content: string;

  beforeEach(() => {

    // Create content for ArticleComponent
    content = `
      <h1 class="title">Content</h1>
      <p>Description</p>
    `;

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [
        { provide: 'contents', useValue: content },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    // create component
    fixture = TestBed.createComponent(ArticleComponent);

    comp = fixture.componentInstance;

  });

  it('should have "contents" property', () => {
    expect(comp.contents).toBeDefined();
  });

  it('should have "contents" property', () => {
    expect(comp.contents).toEqual(content);
  });

  it('should display "Content"', () => {
    de = fixture.debugElement.query(By.css('article'));
    el = de.nativeElement;
    expect(el.innerHTML).toContain('Description');
  });

});
