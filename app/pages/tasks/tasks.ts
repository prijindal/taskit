import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Keyboard, StatusBar } from 'ionic-native';

import { OptionsPopover } from './options-popover/options-popover';

@Component({
  templateUrl: 'build/pages/tasks/tasks.html'
})
export class TasksPage {
  newtasktext: string = '';
  addingtask: Boolean = false;
  input: any;

  constructor(
    private ref: ChangeDetectorRef,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidEnter() {
    this.input = document.querySelector('input');
  }

  openSettings(event) {
    let popover = this.popoverCtrl.create(OptionsPopover);
    popover.present({ev: event});
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  goToSearch(event) {

  }

  addTask(event) {
    this.input['focus']();
    this.addingtask = true;
    StatusBar.backgroundColorByHexString('#f4f4f4');
    Keyboard.onKeyboardHide()
    .subscribe(() => {
      this.closeInput();
    });
  }

  closeInput(event?) {
    this.addingtask = false;
    StatusBar.backgroundColorByHexString('#c33433');
    this.ref.detectChanges();
    return false;
  }

  addNewTask(event) {
    this.newtasktext = '';
    // Add Task
    return false;
  }
}
