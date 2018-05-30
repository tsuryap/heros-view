import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector: 'superhero-app',
    template: `
    <div>
       <h1>{{pageTitle}}</h1>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
           <a class="navbar-brand">{{pageTitle}}</a>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['welcome']">Home</a></li>
            <li><a [routerLink]="['heroes']">Home List</a></li>
          </ul>
        </div>
      </nav>  
      <div class="container">
        <router-outlet></router-outlet>
      </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Indian Super Hero ';
}
