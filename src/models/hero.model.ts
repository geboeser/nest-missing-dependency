import { AggregateRoot } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../hero/events/hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(public readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    console.log(`killed enemy with id: ${enemyId}`);

    this.apply(new HeroKilledDragonEvent(this.id));
  }
}
