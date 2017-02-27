import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver,
  OnInit
} from '@angular/core';
import { components } from '../index';

@Component({
  selector: 'page-item',
  entryComponents: components,
  templateUrl: 'page-item.component.html'
})
export class PageItemComponent implements OnInit {

  public currentComponent = null;
  public componentAlias: any = {};

  @Input() public data;
  @ViewChild('container', { read: ViewContainerRef }) public container: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {
    components.forEach((el) => {
      this.componentAlias[el.name] = el;
    });
  }

  public destroyComponent(currentComponent) {
    if (currentComponent) {
      currentComponent.destroy();
    }
  }

  public createComponent(data, container, componentAlias, currentComponent) {
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
    let factory = this.resolver.resolveComponentFactory(componentAlias[data.class]);
    let component = factory.create(injector);
    currentComponent = component;
    container.insert(component.hostView);
  }

  public ngOnInit() {
    this.destroyComponent(this.currentComponent);

    if (this.data instanceof Array) {
      this.data.forEach((el) => {
        this.createComponent(el, this.container, this.componentAlias, this.currentComponent);
      });
    } else if ( this.data instanceof Object) {
      this.createComponent(this.data, this.container, this.componentAlias, this.currentComponent);
    }
  }
}
