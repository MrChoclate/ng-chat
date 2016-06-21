import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './message';


@Component({
  moduleId: module.id,
  selector: 'chat-sender',
  templateUrl: 'chat-sender.component.html',
  providers: [ChatService]
})
export class ChatSenderComponent implements OnInit {
  message = new Message('');

  constructor(private chatService: ChatService) {}

  ngOnInit() {
  }

  onSubmit(): void {
    this.chatService.sendMessage(this.message);
    this.message = new Message('');
  }

  onClear(): void {
    this.chatService.deleteMessages();
  }
}
