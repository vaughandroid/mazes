export const CellContents = {
  Empty: 'Empty',
  Filled: 'Filled'
};

export class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.contents = CellContents.Empty;
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
}
