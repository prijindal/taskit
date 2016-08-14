import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { OptionsPopover } from './options-popover/options-popover';

@Component({
  templateUrl: 'build/pages/tasks/tasks.html'
})
export class TasksPage {
  constructor(
    private popoverCtrl: PopoverController
  ) { }

  openSettings(event) {
    let popover = this.popoverCtrl.create(OptionsPopover);
    popover.present({ev: event});
  }
}
