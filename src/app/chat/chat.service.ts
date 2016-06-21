import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {Message} from './message';


@Injectable()
export class ChatService {
  private messages: FirebaseListObservable<Message[]>;

  constructor(af: AngularFire) {
    this.messages = af.database.list('messages');
  }

  getMessages(): FirebaseListObservable<Message[]> {
    return this.messages;
  }

  sendMessage(message: Message): void {
    this.messages.push(message);
  }

}
