import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'app/page/login/template.html',
    styleUrls: ['app/page/login/index.css']
})
export class LoginPage implements OnInit {
    
    constructor() {
        
    }

    ngOnInit() {
        console.log('login init');
    }

}
