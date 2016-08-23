import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { TasksPage } from '../../tasks/tasks';

@Component({
  templateUrl: 'build/pages/welcome/signup/signup.html'
})
export class SignupPage {
  nameinput: any;

  constructor(
    private nav: NavController,
    private el: ElementRef
  ) {}

  ionViewWillEnter() {
    this.nameinput = this.el.nativeElement.querySelector('ion-input[name="name"] input');
  }

  ionViewDidEnter() {
    this.focusEmail();
  }

  focusEmail() {
    setTimeout(() => {
      this.nameinput['focus']();
    }, 0);
  }

  signup(event) {
    this.nav.setRoot(TasksPage);
  }
  
  close(event) {
    this.nav.pop({
      animation: 'wp-transition'
    });
  }
}
