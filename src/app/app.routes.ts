import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent, LogoutComponent } from './auth';
import { ChatComponent } from './chat';

export const routes: RouterConfig = [
  { path: 'login', component: LoginComponent, index: true },
  { path: 'logout', component: LogoutComponent },
  { path: 'chat', component: ChatComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
