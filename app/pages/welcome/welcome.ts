import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {
  constructor(private nav: NavController) {}
  loginWithGoogle(event) {

  }

  login(event) {
    this.nav.push(LoginPage, null, {
      animation: 'wp-transition'
    });
  }

  signup(event) {
    this.nav.push(SignupPage, null, {
      animation: 'wp-transition'
    });
  }

  takeTour(event) {
    this.nav.setRoot(TutorialPage, null, {
      animate: true,
      animation: 'ios-transition'
    });
  }
}
