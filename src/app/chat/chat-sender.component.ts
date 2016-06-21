import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './message';
import { AuthService } from '../auth/auth.service';



@Component({
  moduleId: module.id,
  selector: 'chat-sender',
  templateUrl: 'chat-sender.component.html',
})
export class ChatSenderComponent implements OnInit {
  message = new Message();

  constructor(
    private chatService: ChatService,
    private authService: AuthService) {}

  ngOnInit() {
  }

  _updateMessage(): void {
    this.message.author = this.authService.getUsername();
    this.message.timestamp = new Date().getTime();
  }

  onSubmit(): void {
    this._updateMessage();
    this.chatService.sendMessage(this.message);
    this.message = new Message();
  }

  onClear(): void {
    this.chatService.deleteMessages();
  }

  onKeypress($event: KeyboardEvent): void {
    if ($event.keyCode == 13 && !$event.shiftKey) {
      this.onSubmit();
    }
  }
}
