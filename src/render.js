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
      output = output + cell.contents;
    })
    output = output + '|\n';
  });

  addTopBottomBorder();

  return output;
}