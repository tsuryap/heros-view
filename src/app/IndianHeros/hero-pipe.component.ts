import {PipeTransform, Pipe } from '@angular/core';
import {ISuperHero} from './superhero';

@Pipe({
  name: 'heroFilter'
})

export  class HeroFilterPipe implements  PipeTransform{
  transform(value: ISuperHero[],args: string): ISuperHero[]{
    let myresult : string = args ? args.toLocaleLowerCase() : null;
    return myresult ? value.filter((hero: ISuperHero) =>
     this.compare(hero,myresult) ) : value;
  }

  compare(hero: ISuperHero,myresult: string) : boolean{
    let matched: boolean = false;
    let keys  = Object.keys(hero);
    console.log();
    for(let i = 0; i < keys.length; i++) {
      if(keys[i] !== "heroId" && hero[keys[i]].toLocaleLowerCase().indexOf(myresult) !== -1) {
        matched = true;
      }
    }
    return matched;
  }
}
