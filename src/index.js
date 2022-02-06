import logUpdate from 'log-update';
import {Grid} from "./grid.js";
import {renderGrid} from "./render.js";

const grid = new Grid(20, 10);

function main() {
  setInterval(() => {
    logUpdate(renderGrid(grid));
  }, 80);
}

main();