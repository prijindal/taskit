import { Component } from '@angular/core';
import { NavController, Platform, PopoverController } from 'ionic-angular';

import { OptionsPopover } from '../options-popover/options-popover';

@Component({
  templateUrl: 'build/pages/settings/notifications/notifications.html'
})
export class NotificationsSettings {
  notificationsOn: Boolean = true;
  sub: any;

  constructor(
    private platform: Platform,
    private nav: NavController,
    private popoverCtrl: PopoverController
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

  openMoreOptions(event) {
    let popover = this.popoverCtrl.create(OptionsPopover);
    popover.present({ev: event});
  }
}
