import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  constructor(
    private nav: NavController
  ) {}

  close(event) {
    this.nav.pop();
  }
}
