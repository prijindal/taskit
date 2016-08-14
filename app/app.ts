import 'es6-shim';
import 'rxjs/Rx';
import { ionicBootstrap } from 'ionic-angular';

import { APP_PROVIDERS } from './app.providers';

import { MyApp } from './app.component';

ionicBootstrap(
  MyApp, APP_PROVIDERS,
  {
    pageTransitionDelay: 0,
    prodMode: true
  }
);
