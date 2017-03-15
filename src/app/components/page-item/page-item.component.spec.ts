import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';

// test component
import { PageItemComponent } from './page-item.component';

// describe test
describe('PageItemComponent', () => {

  let comp: PageItemComponent;
  let fixture: ComponentFixture<PageItemComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let content: string;

  beforeEach(() => {

    // @NgModule create
    TestBed.configureTestingModule({
      declarations: [PageItemComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    // create component
    fixture = TestBed.createComponent(PageItemComponent);

    comp = fixture.componentInstance;

  });

  it('should have properties', () => {
    expect(comp.currentComponent).toBeDefined();
    expect(comp.data).toBeDefined();
    expect(comp.container).toBeDefined();
  });

  it('should properties be null', () => {
    expect(comp.currentComponent).toBeNull();
    expect(comp.data).toBeNull();
  });

  describe('destroyComponent method', () => {

    let currentComponent;

    beforeEach(() => {
      class CurrentComponent {
        public destroy() {
          return true;
        }
      }

      currentComponent = new CurrentComponent();

      spyOn(comp, 'destroyComponent');
      spyOn(currentComponent, 'destroy');

    });

    it('should be defined', () => {
      expect(comp.destroyComponent).toBeDefined();
    });

    it('should have be called', () => {
      comp.ngOnInit();
      expect(comp.destroyComponent).toHaveBeenCalled();
    });

    it('should have be called destroy function', () => {
      comp.destroyComponent(currentComponent);
      expect(currentComponent.destroy).toHaveBeenCalled();
    });
  });

});
