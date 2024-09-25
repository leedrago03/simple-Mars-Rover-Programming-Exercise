// Grid.ts
export class Grid {
    private width: number;
    private height: number;
    private obstacles: [number, number][];
  
    constructor(width: number, height: number, obstacles: [number, number][]) {
      this.width = width;
      this.height = height;
      this.obstacles = obstacles.filter(([x, y]) => x >= 0 && x < width && y >= 0 && y < height);
    }

    public getGridWidth(): number {
        return this.width;
      }
    
      public getGridHeight(): number {
        return this.height;
      }
    
      public isObstacle(x: number, y: number): boolean {
        return this.obstacles.some(([obstacleX, obstacleY]) => obstacleX === x && obstacleY === y);
      }
  }