import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/profile/profile.html'
})
export class ProfilePage {
  sub: any;
  constructor(
    private platform: Platform,
    private nav: NavController
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
