import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { UserService } from '../../providers/user';

@Component({
  templateUrl: 'build/pages/profile/profile.html'
})
export class ProfilePage {
  sub: any;
  constructor(
    private platform: Platform,
    private nav: NavController,
    private user: UserService
  ) {}

  ionViewWillEnter() {
    this.sub = this.platform.registerBackButtonAction(() => {
      this.close();
    });
  }

  ionViewWillLeave() {
    this.sub();
  }

  close(event?) {
    this.nav.pop();
  }
}
