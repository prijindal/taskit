import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/general/general.html'
})
export class GeneralSettings {
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