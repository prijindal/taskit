import { Injectable } from '@angular/core';

import { UserService } from './user';
import { TokenService } from './token';
import { TodoHttp } from './todohttp';

@Injectable()
export class LoginService {
  public user = {
    email: '',
    password: ''
  };

  constructor(
    private token: TokenService,
    private http: TodoHttp,
    private userService: UserService
  ) {}

  login() {
    return this.http.post('user/login', {email: this.user.email, password: this.user.password})
    .map((res) => {
      this.token.setToken(res.api_token);
      this.userService.saveUserData(res);
      return res;
    });
  }
}
