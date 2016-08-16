import { Input, Component } from '@angular/core';

import { TasksPage } from '../pages/tasks/tasks';

@Component({
  selector: 'menu-list',
  templateUrl: 'build/menu-list/menu-list.html'
})
export class MenuList {
  @Input()
  nav: any;

  openInbox(event) {
    this.nav.setRoot(TasksPage);
  }
}
