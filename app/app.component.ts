import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Platform, Nav, MenuController, Events } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TutorialPage } from './pages/tutorial/tutorial';
import { TasksPage } from './pages/tasks/tasks';

import { ProfileInfo } from './profile-info/profile-info';
import { MenuList } from './menu-list/menu-list';

import { TokenService } from './providers/token';

@Component({
  templateUrl: 'build/app.html',
  directives: [ProfileInfo, MenuList]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  enableMenu: Boolean = false;

  constructor(
    private ref: ChangeDetectorRef,
    private events: Events,
    private platform: Platform,
    private menu: MenuController,
    private token: TokenService
  ) {
    this.initMenu();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#c33433');
      this.initBackButton();
    });
  }

  initMenu() {
    this.events.subscribe('logged:in', (params) => {
      let isLoggedIn = params[0];
      if (isLoggedIn) {
        this.enableMenu = true;
        this.rootPage = TasksPage;
      } else {
        this.rootPage = TutorialPage;
      }
      this.ref.detectChanges();
    });
  }

  initBackButton() {
    this.platform.registerBackButtonAction(() => {
      if (this.nav.canGoBack()) {
        this.nav.pop();
      } else if (this.menu.isOpen()) {
        this.menu.close();
      } else {
        let homeIntent = navigator['home'];
        if (homeIntent) {
          homeIntent.home();
        } else if (navigator['app']) {
          navigator['app'].exitApp();
        } else {
          return true;
        }
      }
    });
  }
}
