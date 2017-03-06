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

  beforeEach(() => {

    // Create content for ArticleComponent
    const content: string = '<h1>Content</h1>';

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ], // declare the test component
      providers: [
        { provide: 'contents', useValue: content }
      ]
    });

    // create component
    fixture = TestBed.createComponent(ArticleComponent);

    comp = fixture.componentInstance; // headerComponent test instance

    // authService actually injected into the component
    const authService = fixture.debugElement.injector.get('contents');

    // query for the title <a> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display "Content"', () => {
    expect(el.textContent).toContain('Content');
  });

  it('should have "contents" property', () => {
    expect(comp.contents).toBeDefined();
  });

  it('should have "contents" property', () => {
    expect(comp.contents).toEqual(content);
  });

});
