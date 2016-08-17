import { Component } from '@angular/core';
import { NavController, Platform, PopoverController } from 'ionic-angular';

import { OptionsPopover } from '../options-popover/options-popover';

import { UserService } from '../../../providers/user';

@Component({
  templateUrl: 'build/pages/settings/account/account.html'
})
export class AccountSettings {
  sub: any;

  constructor(
    private platform: Platform,
    private nav: NavController,
    private popoverCtrl: PopoverController,
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

  openMoreOptions(event) {
    let popover = this.popoverCtrl.create(OptionsPopover);
    popover.present({ev: event});
  }
}
