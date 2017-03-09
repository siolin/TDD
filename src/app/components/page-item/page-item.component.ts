import { componentList } from './../index';
import { ArticleComponent } from './../article/article.component';
import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';

@Component({
  selector: 'page-item',
  templateUrl: 'page-item.component.html'
})
export class PageItemComponent implements OnInit {

  public currentComponent = null;

  @Input() public data = null;
  @ViewChild('container', { read: ViewContainerRef }) public container: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {}

  public destroyComponent(currentComponent) {
    if (currentComponent) {
      currentComponent.destroy();
    }
  }

  public createComponent(data, container, currentComponent) {
    const params = ['contents', 'children'];
    const inputProviders = [];
    params.forEach((param) => {
      if (data.hasOwnProperty(param)) {
        Object.keys(data).forEach((inputName) => {
          if (inputName === param) {
            inputProviders.push({ provide: inputName, useValue: data[param] });
          }
        });
      }
    });
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    let injector = ReflectiveInjector
      .fromResolvedProviders(resolvedInputs, container.parentInjector);
    let factory = this.resolver.resolveComponentFactory(componentList[data.class]);
    let component = factory.create(injector);
    currentComponent = component;
    container.insert(component.hostView);
  }

  public ngOnInit() {
    this.destroyComponent(this.currentComponent);

    if (this.data instanceof Array) {
      this.data.forEach((el) => {
        this.createComponent(el, this.container, this.currentComponent);
      });
    } else if ( this.data instanceof Object) {
      this.createComponent(this.data, this.container, this.currentComponent);
    }
  }
}
