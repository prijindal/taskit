import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { WelcomePage } from './pages/welcome/welcome';
import { TasksPage } from './pages/tasks/tasks';

import { ProfileInfo } from './profile-info/profile-info';
import { MenuList } from './menu-list/menu-list';

@Component({
  templateUrl: 'build/app.html',
  directives: [ProfileInfo, MenuList]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  enableMenu: Boolean = false;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    // this.rootPage = TasksPage;
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
    this.enableMenu = true;
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
