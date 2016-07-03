import { provideRouter, RouterConfig }  from '@angular/router';


import {HomePage} from './page/home/index';
import {LoginPage} from './page/login/index';
import {SignUpPage} from './page/sign-up/index';
import {CreatePagePage} from './page/create-page/index';

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
    },
    {
        path: 'sign-up',
        component: SignUpPage
    },
    {
        path: 'create-page',
        component: CreatePagePage
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
