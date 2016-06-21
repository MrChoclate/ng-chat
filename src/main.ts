import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyDCfBKFCoSNpcXCfru9QzxpGPtCZ1lNyaY",
    authDomain: "ng-chat-58eaf.firebaseapp.com",
    databaseURL: "https://ng-chat-58eaf.firebaseio.com",
    storageBucket: "ng-chat-58eaf.appspot.com",
  })
]);
