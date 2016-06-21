import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service'


@Component({
  moduleId: module.id,
  selector: 'auth-logout',
  templateUrl: 'logout.component.html',
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
