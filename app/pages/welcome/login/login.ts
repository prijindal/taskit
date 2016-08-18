import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksPage } from '../../tasks/tasks';

@Component({
  templateUrl: 'build/pages/welcome/login/login.html'
})
export class LoginPage {
  constructor(
    private nav: NavController
  ) {}
  login(event) {
    this.nav.setRoot(TasksPage);
  }
}
