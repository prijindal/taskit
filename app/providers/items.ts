import { Injectable } from '@angular/core';

import { SyncService } from './sync';

@Injectable()
export class ItemsService {

  // constructor(
  //   private syncService: SyncService
  // ) {}

  getSevenDaysItems(items): any[] {
    let sevenDayItems = [];
    var now = new Date();
    items.forEach((item) => {
      if (item.due_date_utc) {
        var d = new Date(item.due_date_utc)
        var timeDiff = Math.abs(d.getTime() - now.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        if (diffDays <= 7 ) {
          sevenDayItems.push(item);
        }
      }
    });
    return sevenDayItems;
  }

  getSevenDaysItemsCount(items) {
    return this.getSevenDaysItems(items).length;
  }
}