import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroRepository } from './hero/repository/hero.repository';
import { HeroKilledDragonHandler } from './hero/events/hero-killed-dragon.event';
import { KillDragonHandler } from './hero/commands/kill-dragon.command';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [HeroRepository, HeroKilledDragonHandler, KillDragonHandler],
})
export class AppModule {}
