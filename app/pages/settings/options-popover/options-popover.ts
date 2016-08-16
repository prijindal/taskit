import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/options-popover/options-popover.html'
})
export class OptionsPopover {
  constructor(private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  restore() {
    this.close();
  }
}
