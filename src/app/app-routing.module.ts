import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './Home/welcome.component';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'welcome' , component: WelcomeComponent},
      {path: '' , redirectTo: 'welcome',pathMatch: 'full'},
      {path: '**' , redirectTo: 'welcome',pathMatch: 'full'}
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
