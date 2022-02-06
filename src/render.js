export function renderGrid(grid) {
  let output = '';
  const width = grid[0].length;

  function addTopBottomBorder() {
    output = output + '+';
    for (let i = 0; i < width; i++) {
      output = output + '-';
    }
    output = output + '+\n';
  }

  addTopBottomBorder();

  grid.forEach(row => {
    output = output + '|';
    row.forEach(cell => {
      output = output + cell;
    })
    output = output + '|\n';
  });

  addTopBottomBorder();

  return output;
}