import { Component, OnInit } from '@angular/core';
import {ISuperHero} from './superhero';
import {HeroService} from './hero.services';

@Component({
  moduleId: module.id,
  selector: 'super-heros',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']

})
export class HeroListComponent implements  OnInit {
   pageTitle: string =  'Indian Super Hero List';
   imageWidth: number = 100;
   imageMargin: number =  2;
   showImage: boolean = false;
   listFilter: string =  "";
   heroes: ISuperHero[];
  errorMessage:string;
   toogleImage(): void {
     this.showImage = !this.showImage;
   }
   constructor(private _heroservice: HeroService) {

   }
   ngOnInit(): void {
     this._heroservice.getHeroes().subscribe(result => this.heroes = result,
                    error => this.errorMessage = <any> error);

   }
}
