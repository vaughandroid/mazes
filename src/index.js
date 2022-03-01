import {Grid} from "./grid.js";
import {Engine} from "./engine.js";
import {DepthFirstSearch} from "./algorithms/depthFirstSearch.js";

function main() {
  const grid = new Grid(21, 11);
  const engine = new Engine(grid, new DepthFirstSearch(grid));
  engine.run();
}

main();
