import {CellContents} from "../grid.js";

function getRandomItem(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

export class DepthFirstSearch {
  constructor(grid) {
    this.grid = grid;
    this.visitableCells = [];
    grid.rows.forEach((row, y) => {
      row.forEach((cell, x) => {
        cell.contents = CellContents.Filled;

        if (x % 2 === 1 && y % 2 === 1) {
          this.visitableCells.push(cell);
        }
      })
    })
    this.backStack = [];
    const startingCell = getRandomItem(this.visitableCells);
    this.visitCell(startingCell);
  }

  visitCell(cell) {
    this.clearCell(cell);
    this.backStack.push(cell);
    const idx = this.visitableCells.indexOf(cell);
    this.visitableCells.splice(idx, 1);
  }

  clearCell(cell) {
    cell.contents = CellContents.Empty;
  }

  step() {
    if (this.visitableCells.length === 0) return false;

    let nextCell;
    while (nextCell === undefined) {
      const currentCell = this.backStack.pop();
      nextCell = this.getVisitableNeighbour(currentCell);
      if (nextCell) {
        this.backStack.push(currentCell);
        const interveningWallCell = this.grid.getCellAt(
          (currentCell.x + nextCell.x) / 2,
          (currentCell.y + nextCell.y) / 2
        );
        this.clearCell(interveningWallCell);
      }
    }

    this.visitCell(nextCell);

    return true;
  }

  getVisitableNeighbour(cell) {
    const {x, y} = cell;
    const candidates = [
      this.grid.getCellAt(x, y - 2),
      this.grid.getCellAt(x, y + 2),
      this.grid.getCellAt(x - 2, y),
      this.grid.getCellAt(x + 2, y)
    ].filter(cell => this.visitableCells.indexOf(cell) !== -1);
    return getRandomItem(candidates);
  }
}
