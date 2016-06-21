import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ChatService } from './chat';
import { AuthService } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>
      Welcome to ng-chat !
    </h1>

    <div class="fixed-action-btn" style="top: 45px; right: 24px;">
      <a [routerLink]="['/logout']" class="btn-floating btn-large red">
        <i class="large material-icons">input</i>
      </a>
    </div>

    <router-outlet></router-outlet>`,

  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService, ChatService]
})
export class AppComponent {
}
