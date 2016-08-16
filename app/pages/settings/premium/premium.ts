import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/premium/premium.html'
})
export class PremiumSettings {
  sub: any;
  premiumSlideOptions = {
    pager: true
  };

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
