import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './message';


@Component({
  moduleId: module.id,
  selector: 'chat-sender',
  template: `
  <div class="row">
    <div class="input-field col s10">
      <textarea [(ngModel)]=message.content id="textarea" class="materialize-textarea"></textarea>
      <label for="textarea">Message</label>
    </div>

    <div class="col s2">
      <button (click)=onClick() class="btn waves-effect waves-light">Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>`,
  providers: [ChatService]
})
export class ChatSenderComponent implements OnInit {
  message = new Message('');

  constructor(private chatService: ChatService) {}

  ngOnInit() {
  }

  onClick(): void {
    this.chatService.sendMessage(this.message);
    this.message = new Message('');
  }
}
