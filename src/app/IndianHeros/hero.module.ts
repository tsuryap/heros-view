import {NgModule} from '@angular/core';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroFilterPipe} from './hero-pipe.component';
import {WelcomeComponent} from '../Home/welcome.component';
import {HeroGuardService} from './hero-guard.service';
import {HeroService} from './hero.services';
import {SharedModule} from '../shared/shared.module';
import {HeroRoutingModule} from './hero-routing.module';



@NgModule({
  imports: [
    SharedModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroFilterPipe
  ],
  providers: [HeroService , HeroGuardService]
})

export class HeroModule{

}
