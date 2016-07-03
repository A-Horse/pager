import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {FORM_PROVIDERS, FormBuilder, Validators, ControlGroup} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'login',
    templateUrl: 'app/page/login/template.html',
    styleUrls: ['app/page/login/index.css']
})
export class LoginPage implements OnInit {
    private LOGIN_API = 'api/login'
    
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        console.log('login init');
    }

    authenticate(username: string, password: string) {
        this.http.put(this.LOGIN_API, {
            username: username,
            password: password
        }).subscribe(
            this.handleSuccess.bind(this),
            this.handleError.bind(this)
        );
    }

    handleError(err) {
        console.error(err);
    }

    handleSuccess(res) {
        console.log('login successful!')
        this.router.navigate(['create-page'])
    }
}
