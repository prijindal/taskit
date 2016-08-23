import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { TasksPage } from '../../tasks/tasks';

@Component({
  templateUrl: 'build/pages/welcome/login/login.html'
})
export class LoginPage {
  emailinput: any;

  constructor(
    private nav: NavController,
    private el: ElementRef
  ) {}

  ionViewWillEnter() {
    this.emailinput = this.el.nativeElement.querySelector('ion-input[name="email"] input');
  }

  ionViewDidEnter() {
    this.focusEmail();
  }

  focusEmail() {
    setTimeout(() => {
      this.emailinput['focus']();
    }, 0);
  }

  login(event) {
    this.nav.setRoot(TasksPage);
  }

  forgotPassword(event) {

  }

  close(event) {
    this.nav.pop({
      animation: 'wp-transition'
    });
  }
}
