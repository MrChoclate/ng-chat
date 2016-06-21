import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { AuthService } from './auth.service'
import { User } from './user'


@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  providers: [AuthService],
  directives: []
})
export class AuthComponent implements OnInit {
  user = new User('', '');
  isLogged: Observable<boolean>;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isLogged = this.authService.isLogged();
  }

  onLogin(): void {
    this.authService.login(this.user);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
