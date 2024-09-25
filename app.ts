// app.ts
import { Rover } from './Rover';
import { Grid } from './Grid';
import { MoveCommand } from './MoveCommand';
import { TurnLeftCommand } from './TurnLeftCommand';
import { TurnRightCommand } from './TurnRightCommand';

const grid = new Grid(10, 10, [[2, 2], [3, 5]]);
const rover = new Rover(0, 0, 'N',grid);

const commands = [
  new MoveCommand(),
  new MoveCommand(),
  new TurnRightCommand(),
  new MoveCommand(),
  new TurnLeftCommand(),
  new MoveCommand(),
];

for (const command of commands) {
  command.execute(rover);
  console.log(rover.getStatus());
}