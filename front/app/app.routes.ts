import { provideRouter, RouterConfig }  from '@angular/router';


import {HomePage} from './page/home/index';
import {LoginPage} from './page/login/index';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'login',
        component: LoginPage
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
