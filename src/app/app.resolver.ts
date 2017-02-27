import { Http } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(
    private http: Http
  ) {}
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('/assets/mock-data/data-structure.json')
      .map((data) => data.json());
  }
}

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  DataResolver
];
