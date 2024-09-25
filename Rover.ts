import { Grid } from "./Grid";

// Rover.ts
export class Rover {
    private x: number;
    private y: number;
    private direction: string;
    private grid: Grid;
  
    constructor(x: number, y: number, direction: string, grid: Grid) {
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.grid = grid;
    }
  
    public move(): void {
      switch (this.direction) {
        case 'N':
          if (this.y < this.grid.getGridHeight() && !this.grid.isObstacle(this.x, this.y + 1)) {
            this.y++;
          }
          break;
        case 'S':
          if (this.y > 0 && !this.grid.isObstacle(this.x, this.y - 1)) {
            this.y--;
          }
          break;
        case 'E':
          if (this.x < this.grid.getGridWidth() && !this.grid.isObstacle(this.x + 1, this.y)) {
            this.x++;
          }
          break;
        case 'W':
          if (this.x > 0 && !this.grid.isObstacle(this.x - 1, this.y)) {
            this.x--;
          }
          break;
      }
    }
  
    public turnLeft(): void {
      switch (this.direction) {
        case 'N':
          this.direction = 'W';
          break;
        case 'S':
          this.direction = 'E';
          break;
        case 'E':
          this.direction = 'N';
          break;
        case 'W':
          this.direction = 'S';
          break;
      }
    }
  
    public turnRight(): void {
      switch (this.direction) {
        case 'N':
          this.direction = 'E';
          break;
        case 'S':
          this.direction = 'W';
          break;
        case 'E':
          this.direction = 'S';
          break;
        case 'W':
          this.direction = 'N';
          break;
      }
    }
  
    public getStatus(): string {
      return `Rover is at (${this.x}, ${this.y}) facing ${this.direction}`;
    }
  }