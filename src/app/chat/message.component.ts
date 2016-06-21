import { Component, OnInit } from '@angular/core';

import { Message } from './message';

@Component({
  moduleId: module.id,
  selector: 'chat-message',
  template: `
    <li class="collection-item">
      <span class="title"><i>{{message.author}}</i></span>
      <span class="secondary-content">{{message.timestamp | date:'shortTime'}}</span>
      <p style="white-space: pre-line">{{message.content}}</p>
    </li>`,
  inputs: ['message']
})
export class MessageComponent implements OnInit {
  message: Message;

  constructor() {}

  ngOnInit() {
  }

}
