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
    });
  }

  initMenu() {
    this.enableMenu = true;
  }
}
