import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeroListComponent} from './hero-list.component';
import {HeroGuardService} from './hero-guard.service';
import {HeroDetailComponent} from './hero-detail.component';

@NgModule(
  {
    imports: [
      RouterModule.forChild([
        {path: 'heroes' , component: HeroListComponent},
        {path: 'heroes/:id' ,canActivate:[HeroGuardService], component: HeroDetailComponent}
      ])
    ],
    exports: [
      RouterModule
    ]
  }
)
export class HeroRoutingModule{

}
