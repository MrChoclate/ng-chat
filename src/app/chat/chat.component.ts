import { Component, OnInit } from '@angular/core';

import { ChatSenderComponent } from './chat-sender.component';
import { ChatBoxComponent } from './chat-box.component';
import { ChatService } from './chat.service';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  template: `
    <chat-box></chat-box>
    <chat-sender></chat-sender>`,
  providers: [ChatService],
  directives: [ChatSenderComponent, ChatBoxComponent]
})
export class ChatComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
