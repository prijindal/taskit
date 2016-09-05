import { Injectable } from '@angular/core';

import { SyncService } from './sync';

@Injectable()
export class ProjectsService {
  private COLORS = [
    '#95ef63',
    '#ff8581',
    '#ffc471',
    '#f9ec75',
    '#a8c8e4',
    '#d2b8a3',
    '#e2a8e4',
    '#cccccc',
    '#fb886e',
    '#ffcc00',
    '#74e8d3',
    '#3bd5fb',
    '#dc4fad',
    '#ac193d',
    '#d24726',
    '#82ba00',
    '#03b3b2',
    '#008299',
    '#5db2ff',
    '#0072c6',
    '#000000',
    '#777777'
  ];

  constructor(
    private syncService: SyncService
  ) {}

  getProjectColor(color: number) {
    return this.COLORS[color];
  }

  getProjectCount(project_id: number) {
    let count = 0;
    this.syncService.syncData.items.forEach((item) => {
      if (item.project_id === project_id) {
        count++;
      }
    });
    return count;
  }
}