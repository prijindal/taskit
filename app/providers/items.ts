import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { SyncService } from './sync';

@Injectable()
export class ItemsService {

  constructor(
    private syncService: SyncService
  ) {}

  getSevenDaysItems(): any[] {
    let sevenDayItems = [];
    var now = new Date();
    this.syncService.syncData.items.forEach((item) => {
      if (item.due_date_utc && !item.checked) {
        var d = new Date(item.due_date_utc);
        var timeDiff = Math.abs(d.getTime() - now.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        if (diffDays <= 7 ) {
          sevenDayItems.push(item);
        }
      }
    });
    return sevenDayItems;
  }

  getSevenDaysItemsCount() {
    return this.getSevenDaysItems().length;
  }

  getInboxItems() {
    let inbox_id;
    if (this.syncService.syncData) {
      this.syncService.syncData.projects.forEach((project) => {
        if (project.inbox_project) {
          inbox_id = project.id
        }
      });
      if (!inbox_id) return [];
      let inbox = [];
      this.syncService.syncData.items.forEach((item) => {
        if (item.project_id === inbox_id && !item.checked) {
          inbox.push(item)
        } 
      });
      return inbox;
    } else {
      return [];
    }
  }

  getInboxItemsCount() {
    return this.getInboxItems().length;
  }

  getTodayItems() {
    let items = [];
    var now = new Date();
    this.syncService.syncData.items.forEach((item) => {
      if (item.due_date_utc && !item.checked) {
        var d = new Date(item.due_date_utc);
        var timeDiff = Math.abs(d.getTime() - now.getTime());
        var diffDays = timeDiff / (1000 * 3600 * 24); 
        if (diffDays <= 1 ) {
          items.push(item);
        }
      }
    });
    return items;
  }

  getTodayItemsCount() {
    return this.getTodayItems().length; 
  }

  pretifyDate(date) {
    if (date) {
      let d = new Date(date);
      let str = moment(d).format('dddd hh:mm A');
      return str;
    } else {
      return '';
    }
  }
}