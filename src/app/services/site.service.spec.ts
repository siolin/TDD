import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SiteService } from './site.service';

describe('SiteService', () => {

  const domain: string = `https://randomuser.me/ap1/`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SiteService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', async(inject(
    [SiteService, MockBackend], (service, mockBackend) => {

    expect(service).toBeDefined();
  })));

  it('should have domain', async(inject(
    [SiteService, MockBackend], (service, mockBackend) => {

    expect(service.domain).toEqual(domain);
  })));

  describe('getUsers', () => {
    const mockResponse = {
      color: 'blue'
    };

    it('should parse response', async(inject(
      [SiteService, MockBackend], (service, mockBackend) => {

        mockBackend.connections.subscribe((conn) => {
          conn.mockRespond(
              new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
        });

        const result = service.getUsers();

        result.subscribe((res) => {
          expect(res).toEqual({
            color: 'blue'
          });
        });
      })));
  });
});
