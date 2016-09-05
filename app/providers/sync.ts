import { Injectable } from '@angular/core';

import { LocalStorage, Storage } from 'ionic-angular';

import { UserService } from './user';
import { TokenService } from './token';
import { TodoHttp } from './todohttp';

@Injectable()
export class SyncService {
  public syncData: any;
  private local: Storage;

  constructor(
    private token: TokenService,
    private http: TodoHttp
  ) {
    this.local = new Storage(LocalStorage);
    this.local.get('syncData')
    .then((syncData) => {
      if (syncData) {
        this.syncData = JSON.parse(syncData);
      }
    });
  }

  syncAll() {
    return this.http.post('sync', {token: this.token.token, sync_token: '*', resource_types: '["all"]'})
    .map((res) => {
      this.token.setToken(res.user.token);
      this.local.set('syncData', JSON.stringify(res));
      this.syncData = res;
      return res;
    });
  }
}
