import {Observable} from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './message';
import { MessageComponent } from './message.component';

@Component({
  moduleId: module.id,
  selector: 'chat-box',
  template: `
    <div>
      <h3>My messages:</h3>
      <ul class="collection">
        <chat-message *ngFor="let message of messages | async" [message]="message"></chat-message>
      </ul>
    </div>`,
  directives: [MessageComponent]
})
export class ChatBoxComponent implements OnInit {
  messages: Observable<Message[]>;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }

}
