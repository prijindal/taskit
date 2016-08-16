import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ProfilePage } from '../pages/profile/profile';

@Component({
  selector: 'profile-info',
  templateUrl: 'build/profile-info/profile-info.html'
})
export class ProfileInfo {
  constructor(
    private modalCtrl: ModalController
  ) {}

  openProfile(event) {
    let profileModal = this.modalCtrl.create(ProfilePage);
    profileModal.present({ev: event});
  }
}
