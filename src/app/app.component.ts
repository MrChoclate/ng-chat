import { Component } from '@angular/core';
import { ChatComponent, ChatService } from './chat';
import { AuthComponent, AuthService } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>
      Welcome to ng-chat !
    </h1>

    <app-auth></app-auth>

    <app-chat></app-chat>`,
  styleUrls: ['app.component.css'],
  directives: [ChatComponent, AuthComponent],
  providers: [AuthService, ChatService]
})
export class AppComponent {
}
