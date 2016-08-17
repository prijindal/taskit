import { HTTP_PROVIDERS }    from '@angular/http';

import { LoadingSpinner } from './loading-spinner/loading-spinner';

import { UserService } from './providers/user';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,

  LoadingSpinner,

  UserService
];
