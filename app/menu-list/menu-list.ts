import { Input, Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { TasksPage } from '../pages/tasks/tasks';

import { SettingsPage } from '../pages/settings/settings';
import { SyncService } from '../providers/sync';
import { ProjectsService } from '../providers/projects';

import { ItemsService } from '../providers/items';

@Component({
  selector: 'menu-list',
  templateUrl: 'build/menu-list/menu-list.html'
})
export class MenuList {
  @Input()
  nav: any;
  showProjects: Boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private syncService: SyncService,
    private projectsService: ProjectsService,
    private itemsService: ItemsService
  ) {}

  openInbox(event) {
    this.nav.setRoot(TasksPage);
  }

  openSettings(event) {
    let settingsModal = this.modalCtrl.create(SettingsPage);
    settingsModal.present({ev: event});
  }
}
