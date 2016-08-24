import { Injectable } from '@angular/core';

import { SqlStorage, Storage, Events } from 'ionic-angular';

@Injectable()
export class TokenService {
  public token: string;
  private local: Storage;
  private TOKEN_QUERY: string = 'token';
  constructor(
    private events: Events
  ) {
    this.local = new Storage(SqlStorage);
    this.local.get(this.TOKEN_QUERY)
    .then((token) => {
      if (token) {
        this.token = token;
        this.events.publish('logged:in', true);
      }
    });
  }

  setToken(newToken: string) {
    this.token = newToken;
    this.local.set(this.TOKEN_QUERY, this.token);
    this.events.publish('logged:in', true);
  }
}
