import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs/Rx';

import { User } from './user'

@Injectable()
export class AuthService {
  _isLogged = new BehaviorSubject(false);
  user: User;

  constructor() {
  }

  isLogged(): Observable<boolean> {
    return this._isLogged;
  }

  logout(): void {
    console.log('logoout');
    this._isLogged.next(false);
  }

  login(user: User): Promise<boolean> {
    console.log('login');
    if (user.username == user.password) {
      this._isLogged.next(true);
      this.user = user;
    }
    return Promise.resolve(user.username == user.password);
  }

  getUsername(): string {
    if(this.user) {
      return this.user.username;
    } else {
      return "Anonymous"
    }
  }
}
