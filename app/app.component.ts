import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TasksPage } from './pages/tasks/tasks';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TasksPage;
  enableMenu: Boolean = false;

  constructor(private platform: Platform) {
    this.rootPage = TasksPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#c33433');
      this.initMenu();
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

  openInbox(event) {
    this.nav.setRoot(TasksPage);
  }
}
