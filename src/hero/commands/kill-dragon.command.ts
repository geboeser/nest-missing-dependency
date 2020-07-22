import {
  ICommand,
  CommandHandler,
  ICommandHandler,
  EventPublisher,
} from '@nestjs/cqrs';
import { HeroRepository } from '../repository/hero.repository';

export class KillDragonCommand implements ICommand {
  public constructor(public readonly heroId: string) {}
}

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  public constructor(
    public repository: HeroRepository,
    private publisher: EventPublisher,
  ) {}

  public async execute(command: KillDragonCommand): Promise<void> {
    const { heroId } = command;

    const hero = this.publisher.mergeObjectContext(
      this.repository.findById(heroId),
    );

    hero.killEnemy('abc');
    hero.commit();
  }
}
