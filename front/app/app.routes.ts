import { provideRouter, RouterConfig }  from '@angular/router';


import {HomePage} from './page/home/index';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomePage
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
