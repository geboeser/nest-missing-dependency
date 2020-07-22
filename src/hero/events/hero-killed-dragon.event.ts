import { IEvent, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../repository/hero.repository';

export class HeroKilledDragonEvent implements IEvent {
  public constructor(public readonly heroId: string) {}
}

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent> {
  public constructor(public repository: HeroRepository) {}

  public async handle(event: HeroKilledDragonEvent): Promise<void> {
    const { heroId } = event;

    this.repository.persist(heroId);
  }
}
