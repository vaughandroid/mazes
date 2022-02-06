import {CellContents} from "./grid.js";

function renderCell(cell) {
  switch (cell.contents) {
    case CellContents.Empty: return ' ';
    default: throw Error(`Unknown cell contents: ${cell.contents}`);
  }
}

export function renderGrid(grid) {
  let output = '';
  function addTopBottomBorder() {
    output = output + '+';
    for (let i = 0; i < grid.width; i++) {
      output = output + '-';
    }
    output = output + '+\n';
  }

  addTopBottomBorder();

  grid.rows.forEach(row => {
    output = output + '|';
    row.forEach(cell => {
      output = output + renderCell(cell);
    })
    output = output + '|\n';
  });

  addTopBottomBorder();

  return output;
}