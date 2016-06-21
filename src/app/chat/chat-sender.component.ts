import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';


@Component({
  moduleId: module.id,
  selector: 'chat-sender',
  template: `
  <div class="row">
    <div class="input-field col s10">
      <textarea #box id="textarea" class="materialize-textarea"></textarea>
      <label for="textarea">Message</label>
    </div>

    <div class="col s2">
      <button (click)=onClick(box.value) class="btn waves-effect waves-light">Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>`,
  providers: [ChatService]
})
export class ChatSenderComponent implements OnInit {

  constructor(private chatService: ChatService) {}

  ngOnInit() {
  }

  onClick(messageContent: string): void {
    this.chatService.sendMessage({'content': messageContent});
  }
}
