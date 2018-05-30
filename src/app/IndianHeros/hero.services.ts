import {Injectable} from '@angular/core';
import {ISuperHero} from './superhero';
import {Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class HeroService {
  private  _dataurl = "http://angularsuperheroservice.azurewebsites.net/api/IndianHeroes";
  constructor(private _http: Http){

  }
  getHeroes(): Observable<ISuperHero[]> {
        return this._http.get(this._dataurl)
          .map((myresponse: Response) => <ISuperHero>myresponse.json())
          .do(data => console.log("All :"))
          .catch(this.handleError);
  }
  private  handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
  getHero(id: number): Observable<ISuperHero> {
    return this.getHeroes().
     map((myheroes:ISuperHero[]) => myheroes.find(p => p.heroId === id));
  }
}
