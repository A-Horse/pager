import { Component, OnInit } from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: ControlGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    
    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}


@Component({
    selector: 'home',
    templateUrl: 'app/page/sign-up/template.html',
    styleUrls: ['app/page/sign-up/index.css'],
    directives: [FORM_DIRECTIVES]
})
export class SignUpPage implements OnInit {
    isAuthRequired: boolean;
    registrationForm: ControlGroup;
    
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder) {
        
        this.registrationForm= fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {validator: matchingPasswords('password', 'confirmPassword')})
    }

    ngOnInit() {
        console.log('sign up init');
    }

}
