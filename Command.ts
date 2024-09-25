import { Rover } from "./Rover";

// Command.ts
export abstract class Command {
    public abstract execute(rover: Rover): void;
  }