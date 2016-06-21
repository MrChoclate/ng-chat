import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service'
import { User } from './user'


@Component({
  moduleId: module.id,
  selector: 'auth-login',
  templateUrl: 'login.component.html',
  directives: []
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(): void {
    let self = this;
    this.authService.login(this.user).then(function(res) {
      self.router.navigate(['/chat']);
    });
  }
}
