function getRandomItem(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

export class DepthFirstSearch {
  constructor(grid) {
    this.grid = grid;
    this.visitableCells = [];
    grid.rows.forEach(row => {
      row.forEach(cell => {
        this.visitableCells.push(cell);
      })
    })
    this.backStack = [];
    const startingCell = getRandomItem(this.visitableCells);
    this.visitCell(startingCell);
  }

  visitCell(cell) {
    this.backStack.push(cell);
    const idx = this.visitableCells.indexOf(cell);
    this.visitableCells.splice(idx, 1);
  }

  step() {
    if (this.visitableCells.length === 0) return false;

    let nextCell;
    while (nextCell === undefined) {
      const currentCell = this.backStack.pop();
      nextCell = this.getVisitableNeighbour(currentCell);
      if (nextCell) {
        this.backStack.push(currentCell);
        this.grid.clearWallsBetween(currentCell, nextCell);
      }
    }

    this.visitCell(nextCell);

    return true;
  }

  getVisitableNeighbour(cell) {
    const {x, y} = cell;
    const candidates = [
      this.grid.getCellAt(x, y - 1),
      this.grid.getCellAt(x, y + 1),
      this.grid.getCellAt(x - 1, y),
      this.grid.getCellAt(x + 1, y)
    ].filter(cell => this.visitableCells.indexOf(cell) !== -1);
    return getRandomItem(candidates);
  }
}
