export class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = {
      top: true,
      left: true,
    }
  }
}

export class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.rows = Array(height);
    for (let y = 0; y < height; y++) {
      const row = Array(width);
      for (let x = 0; x < width; x++) {
        row[x] = new Cell(x, y);
      }
      this.rows[y] = row;
    }
  }

  getCellAt(x, y) {
    const row = this.rows[y];
    return row ? row[x] : undefined;
  }

  clearWallsBetween(cellA, cellB) {
    if (cellA.x === cellB.x) {
      const x = cellA.x;
      const yStart = Math.min(cellA.y, cellB.y) + 1;
      const yEnd = Math.max(cellA.y, cellB.y);
      for (let y = yStart; y <= yEnd; y++) {
        this.getCellAt(x, y).walls.top = false;
      }
    } else if (cellA.y === cellB.y) {
      const y = cellA.y;
      const xStart = Math.min(cellA.x, cellB.x) + 1;
      const xEnd = Math.max(cellA.x, cellB.x);
      for (let x = xStart; x <= xEnd; x++) {
        this.getCellAt(x, y).walls.left = false;
      }
    } else {
      throw Error('Cell positions do not share either an x or a y value: (${cellA.x}, ${cellA}.y), (${cellB.x}, ${cellB.y})')
    }
  }
}
