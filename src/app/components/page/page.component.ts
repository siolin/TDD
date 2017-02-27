import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { components } from '../index';

@Component({
  selector: 'page',
  entryComponents: components,
  templateUrl: 'page.component.html'
})
export class PageComponent implements OnInit {

  public currentPage = [];
  public data: any;
  public componentAlias: any = {};

  @ViewChild('pageContainer', { read: ViewContainerRef }) public pageContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute
  ) {
    components.forEach((el) => {
      this.componentAlias[el.name] = el;
    });
  }
  public ngOnInit() {
    this.route.data
      .subscribe((data) => {
        // Destroy previous page
        if (this.currentPage.length > 0) {
          this.currentPage.forEach((el) => {
            el.destroy();
          });
        }

        this.data = data;

        this.data.data.children.forEach((el) => {
          const content = 'contents';
          const children = 'children';

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
            .fromResolvedProviders(resolvedInputs, this.pageContainer.parentInjector);
          let factory = this.resolver.resolveComponentFactory(this.componentAlias[el.class]);
          let component = factory.create(injector);
          this.currentPage.push(component);
          this.pageContainer.insert(component.hostView);
        });
      });
   }
}
