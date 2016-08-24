import { HTTP_PROVIDERS }    from '@angular/http';

import { LoadingSpinner } from './loading-spinner/loading-spinner';

import { TokenService } from './providers/token';
import { TodoHttp } from './providers/todohttp';

import { LoginService } from './providers/login';

import { UserService } from './providers/user';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,

  LoadingSpinner,

  TokenService,
  TodoHttp,
  LoginService,
  UserService
];
