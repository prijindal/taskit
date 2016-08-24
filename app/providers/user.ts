import { Injectable } from '@angular/core';

import { LocalStorage, Storage } from 'ionic-angular';

export class UserService {
  user: any;
  private local: Storage;

  constructor() {
    this.local = new Storage(LocalStorage);
    this.local.get('userData')
    .then((userData) => {
      this.user = JSON.parse(userData);
    });
  }

  saveUserData(userData) {
    this.user = userData;
    this.local.set('userData', JSON.stringify(this.user));
  }
}
