// TurnLeftCommand.ts
import { Command } from './Command';
import { Rover } from './Rover';

export class TurnLeftCommand extends Command {
  public execute(rover: Rover): void {
    rover.turnLeft();
  }
}