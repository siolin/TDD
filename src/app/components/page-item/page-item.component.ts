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
    const content = 'contents';
    const children = 'children';
    const inputProviders = [];
    if (data.hasOwnProperty(content) || data.hasOwnProperty(children)) {
      Object.keys(data).forEach((inputName) => {
        if (inputName === content) {
          inputProviders.push({ provide: inputName, useValue: data.contents });
        } else if (inputName === children) {
          inputProviders.push({ provide: inputName, useValue: data.children });
        }
      });
    }
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
