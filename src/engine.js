import {renderGrid} from "./render.js";

export class Engine {
  constructor(grid, algorithm, stepTime = 100) {
    this.grid = grid;
    this.algorithm = algorithm;
    this.stepTime = stepTime;
  }

  run() {
    const interval = setInterval(() => {
      const didStep = this.algorithm.step(this.grid);
      renderGrid(this.grid);

      if (!didStep) {
        clearInterval(interval);
      }
    }, this.stepTime);
  }

}
