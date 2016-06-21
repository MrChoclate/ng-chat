import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>
      Welcome to ng-chat !
    </h1>

    <app-chat></app-chat>`,
  styleUrls: ['app.component.css'],
  directives: [ChatComponent],
})
export class AppComponent {
}
