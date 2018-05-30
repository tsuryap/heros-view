import { Component, OnInit } from '@angular/core';
import {ISuperHero} from './superhero';
import {HeroService} from './hero.services';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements  OnInit{
  pageTitle: string =  'Hero Detail';
  hero: ISuperHero;
  errorMessage: string;
  constructor(private _heroService: HeroService, private _route: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {
    if( !this.hero ) {
      let id = +this._route.snapshot.paramMap.get("id");
      this.pageTitle += `${id}`;
      this.getHero(id);
    }
  }
  getHero(id:number) {
    this._heroService.getHero(id).subscribe(result => {this.hero = result; console.log("test",result)},
      error => {this.errorMessage = <any>error});
  }
  onBack(): void{
    this.router.navigate(['/heroes']);
  }
}
