import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  @ViewChild('tutorialSlider') slider: Slides;
  animating: Boolean = true;

  tutorialSlideOptions = {
    pager: true
  };

  constructor(
    private nav: NavController
  ) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.animating = false;
    }, 400);
  }

  onSlideDrag(event) {
    if (this.slider.isEnd()) {
      this.goToWelcome(event);
    }
  }

  goToWelcome(event) {
    this.nav.push(WelcomePage, null, {
      animation: 'ios-transition'
    });
  }
}
