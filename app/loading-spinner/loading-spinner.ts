import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingSpinner {
  loading: Loading;

  constructor(
    private loadingCtrl: LoadingController
  ) {}

  create(options) {
    this.dismiss();
    this.loading = this.loadingCtrl.create(options);
    return this.loading.present();
  }

  dismiss() {
    return new Promise((resolve, reject) => {
      if (this.loading) {
        return this.loading.dismiss()
        .then(() => {
          resolve();
          this.loading.destroy();
        })
        .catch(reject);
      } else {
        resolve();
      }
    });
  }
}
