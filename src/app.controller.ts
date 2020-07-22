import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './hero/commands/kill-dragon.command';
// import { HeroKilledDragonEvent } from './hero/events/hero-killed-dragon.event';

@Controller()
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
  ) // private eventBus: EventBus,
  {}

  @Post()
  getHello(): void {
    this.commandBus.execute(new KillDragonCommand('1234'));
    // this.eventBus.publish(new HeroKilledDragonEvent('1234'));
  }
}
