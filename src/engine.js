import {renderGrid} from "./render.js";

export class Engine {
  constructor(grid, algorithm, stepTime = 500) {
    this.grid = grid;
    this.algorithm = algorithm;
    this.stepTime = stepTime;
  }

  run() {
    setInterval(() => {
      this.algorithm.step(this.grid);
      renderGrid(this.grid);
    }, this.stepTime);
  }

}