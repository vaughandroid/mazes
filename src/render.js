import logUpdate from "log-update";

export function renderGrid(grid) {
  let output = '';

  // Top border
  output = output + '+';
  for (let i = 0; i < grid.width; i++) {
    output = output + '--';
  }
  output = output + '-+\n';

  // Cells & side borders
  grid.rows.forEach(row => {
    // Left border
    output = output + '|';

    row.forEach(cell => {
      output = output + `#${cell.walls.top ? '#' : ' '}`;
    })
    output = output + '#|\n';

    output = output + '|';
    row.forEach(cell => {
      output = output + `${cell.walls.left ? '#' : ' '} `;
    })
    output = output + '#|\n';
  });

  // Bottom walls
  output = output + '|';
  for (let i = 0; i < grid.width; i++) {
    output = output + '##';
  }
  output = output + '#|\n';

  // Bottom border
  output = output + '+';
  for (let i = 0; i < grid.width; i++) {
    output = output + '--';
  }
  output = output + '-+\n';

  logUpdate(output);
}
