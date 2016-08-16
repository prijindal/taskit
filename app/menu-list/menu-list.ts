import { Input, Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { TasksPage } from '../pages/tasks/tasks';

import { SettingsPage } from '../pages/settings/settings';

@Component({
  selector: 'menu-list',
  templateUrl: 'build/menu-list/menu-list.html'
})
export class MenuList {
  @Input()
  nav: any;

  constructor(
    private modalCtrl: ModalController
  ) {}

  openInbox(event) {
    this.nav.setRoot(TasksPage);
  }

  openSettings(event) {
    let settingsModal = this.modalCtrl.create(SettingsPage);
    settingsModal.present({ev: event});
  }
}
