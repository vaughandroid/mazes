import logUpdate from 'log-update';
import {createEmptyGrid} from "./grid.js";
import {renderGrid} from "./render.js";

const grid = createEmptyGrid(20, 10);

function main() {
  setInterval(() => {
    logUpdate(renderGrid(grid));
  }, 80);
}

main();