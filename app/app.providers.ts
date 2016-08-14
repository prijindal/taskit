import { HTTP_PROVIDERS }    from '@angular/http';

import { LoadingSpinner } from './loading-spinner/loading-spinner';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,
  
  LoadingSpinner
];
