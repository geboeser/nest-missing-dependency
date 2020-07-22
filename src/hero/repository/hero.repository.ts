import { Injectable } from '@nestjs/common';
import { Hero } from '../../models/hero.model';

const userHero = new Hero('1234');
@Injectable()
export class HeroRepository {
  public heros: Hero[];

  public constructor() {
    this.heros = [userHero];
  }
  public findById(_id: string): Hero {
    return userHero;
  }

  public persist(heroId: string): void {
    console.log(`persisting data: ${heroId} `);
  }
}
