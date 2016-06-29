import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
<h1>Home</h1>
 <nav>
      <a [routerLink]="['/home']" routerLinkActive="active">home</a>
    </nav>
<router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES],
})

export class AppComponent {
  title = 'Tour of Heroes';
}

