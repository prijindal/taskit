import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, ModalController } from 'ionic-angular';

import { OptionsPopover } from './options-popover/options-popover';

import { PremiumSettings } from './premium/premium';
import { GeneralSettings } from './general/general';
import { AccountSettings } from './account/account';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  sub: any;
  constructor(
    private platform: Platform,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
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

  openMoreOptions(event) {
    let popover = this.popoverCtrl.create(OptionsPopover);
    popover.present({ev: event});
  }

  openPremium(event) {
    let premiumModal = this.modalCtrl.create(PremiumSettings);
    premiumModal.present({ev: event});
  }

  openGeneral(event) {
    let generalModal = this.modalCtrl.create(GeneralSettings);
    generalModal.present({ev: event});
  }

  openAccount(event) {
    let accountModal = this.modalCtrl.create(AccountSettings);
    accountModal.present({ev: event});
  }
}
