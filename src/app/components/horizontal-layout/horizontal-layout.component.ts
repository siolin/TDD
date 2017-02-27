import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver,
  Injector,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { components } from '../index';

@Component({
  selector: 'horizontal-layout',
  entryComponents: components,
  templateUrl: 'horizontal-layout.component.html'
})
export class HorizontalLayoutComponent implements AfterViewInit  {

  public currentLayout = [];
  public data = [];
  public componentAlias: any = {};
  public inputProviders = [];
  // @ViewChildren('hlContainer') public hlContainers: QueryList<any>;
  @ViewChildren('hlContainer', { read: ViewContainerRef }) public hlContainer: QueryList<any>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.data = this.injector.get('children');
    components.forEach((el) => {
      this.componentAlias[el.name] = el;
    });
  }

  public ngAfterViewInit() {
    // console.log(this);

    if (this.currentLayout.length > 0) {
      this.currentLayout.forEach((el) => {
        el.destroy();
      });
    }

    this.data.forEach((el, index) => {
      let currentContainer;
      this.hlContainer.forEach((elem, i) => {
        if ( index === i ) {
          currentContainer = elem;
        }
      });
      const content = 'contents';
      const children = 'children';
      // console.log(currentContainer);

      const inputProviders = [];
      if (el.hasOwnProperty(content) || el.hasOwnProperty(children)) {
        Object.keys(el).forEach((inputName) => {
          if (inputName === content) {
            inputProviders.push({ provide: inputName, useValue: el.contents });
          } else if (inputName === children) {
            inputProviders.push({ provide: inputName, useValue: el.children });
          }
        });
      }
      let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
      let injector = ReflectiveInjector
        .fromResolvedProviders(resolvedInputs, currentContainer.parentInjector);
      let factory = this.resolver.resolveComponentFactory(this.componentAlias[el.class]);
      let component = factory.create(injector);
      this.currentLayout.push(component);
      // console.log(this);
      currentContainer.insert(component.hostView);
    });
  }



  // public ngAfterViewInit() {
  //   this.hlContainers.map((element) => {
  //     console.log(element);
  //   });
  // }

}
