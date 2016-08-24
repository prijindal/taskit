import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { TokenService } from './token';

import { HOST } from './constants';

@Injectable()
export class TodoHttp {
  constructor(
    private http: Http,
    private tokenService: TokenService
  ) {}

  public post(url: string, body: Object): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({
      headers: headers,
      body: this.urlEncode(body)
    });

    return this.http.post(HOST + url, null, options)
    .map(res => res.json());
  }

  private urlEncode(obj) {
    let urlSearchParams = new URLSearchParams();
    for (let key in obj) {
        urlSearchParams.append(key, obj[key]);
    }
    return urlSearchParams.toString();
  }
}
