import { HTTP_PROVIDERS }    from '@angular/http';

import { LoadingSpinner } from './loading-spinner/loading-spinner';

import { TokenService } from './providers/token';
import { TodoHttp } from './providers/todohttp';

import { LoginService } from './providers/login';

import { UserService } from './providers/user';

import { SyncService } from './providers/sync';

import { ProjectsService } from './providers/projects';

import { ItemsService } from './providers/items';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,

  LoadingSpinner,

  TokenService,
  TodoHttp,
  LoginService,
  UserService,

  SyncService,
  ProjectsService,
  ItemsService
];
