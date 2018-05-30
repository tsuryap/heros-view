import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';

@Injectable()

export class HeroGuardService implements  CanActivate {
  constructor(private _router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot):boolean {
    let id = +route.url[1].path;
    if( isNaN(id) || id < 1) {
      alert('Inavalid Hero Id');
      this._router.navigate(['/heroes']);
      return false;
    }
    return true;
  }
}
