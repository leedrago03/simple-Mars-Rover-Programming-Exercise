import { Command } from './Command';
import { Rover } from './Rover';

export class TurnRightCommand extends Command {
  public execute(rover: Rover): void {
    rover.turnRight();
  }
}