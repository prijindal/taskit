import { Injectable } from '@angular/core';

import { SqlStorage, Storage } from 'ionic-angular';

@Injectable()
export class TokenService {
  public token: string;
  private local: Storage;
  private TOKEN_QUERY: string = 'token';
  constructor() {
    this.local = new Storage(SqlStorage);
    this.local.get(this.TOKEN_QUERY)
    .then((token) => {
      this.token = token;
    });
  }

  setToken(newToken: string) {
    this.token = newToken;
    this.local.set(this.TOKEN_QUERY, this.token);
  }
}
