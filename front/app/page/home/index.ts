import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'app/page/home/index.html',
    styleUrls: ['app/page/home/index.css']
})
export class HomePage implements OnInit {
    
    constructor() {
        
    }

    ngOnInit() {
        console.log('home init');
    }

}
