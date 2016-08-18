import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from './login/login';

@Component({
  templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {
  constructor(private nav: NavController) {}
  loginWithGoogle(event) {

  }

  login(event) {
    this.nav.push(LoginPage);
  }

  signup(event) {

  }
}
