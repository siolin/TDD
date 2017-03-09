import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SiteService {

  private domain: string = `https://randomuser.me/ap1/`;

  constructor(
    private http: Http
  ) {}

  public getUsers() {
    return this.http.get(`${this.domain}?result=10`)
      .map((data) => data.json());
  }

}
