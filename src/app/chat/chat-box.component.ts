import {Observable} from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './message';

@Component({
  moduleId: module.id,
  selector: 'chat-box',
  template: `
    <div>
      <h3>My messages:</h3>
      <ul class="collection">
        <li *ngFor="let message of messages | async" class="collection-item">
          <span class="title"><i>{{message.author}}</i></span>
          <p style="white-space: pre-line">{{message.content}}</p>
        </li>
      </ul>
    </div>`,
})
export class ChatBoxComponent implements OnInit {
  messages: Observable<Message[]>;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }

}
