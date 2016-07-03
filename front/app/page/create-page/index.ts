import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import {Page} from '../../model/page';

@Component({
    selector: 'create-page',
    templateUrl: 'app/page/create-page/template.html',
    styleUrls: ['app/page/create-page/index.css']
})
export class CreatePagePage implements OnInit {

    private POST_ARI = 'api/page'

    model = new Page();
    
    constructor(
        private http: Http,
        private router: Router) {
    }

    ngOnInit() {
        console.log('create page init');
    }

    postPage() {
        this.http.post(this.POST_ARI, {
            title: this.model.title,
            content: this.model.content
        }).subscribe(
            this.handleCreateSuccess.bind(this),
            this.handleCreateError.bind(this)
        );
    }
    
    handleCreateError(err) {
        console.error(err);
    }

    handleCreateSuccess(res) {
        console.log('post successful!')
    }
}
