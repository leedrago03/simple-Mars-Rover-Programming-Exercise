// MoveCommand.ts
import { Command } from './Command';
import { Rover } from './Rover';

export class MoveCommand extends Command {
  public execute(rover: Rover): void {
    rover.move();
  }
}