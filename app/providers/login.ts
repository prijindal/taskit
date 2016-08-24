import { Injectable } from '@angular/core';

import { TodoHttp } from './todohttp';

@Injectable()
export class LoginService {
  constructor(
    private http: TodoHttp
  ) {}

  login(email: string, password: string) {
    return this.http.post('user/login', {email: email, password: password});
  }
}
