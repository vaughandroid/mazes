import logUpdate from "log-update";

export function renderGrid(grid) {
  let output = '';

  // Cells
  grid.rows.forEach(row => {
    row.forEach(cell => {
      output = output + `+${cell.walls.top ? '—' : ' '}`;
    })
    output = output + '+\n';

    row.forEach(cell => {
      output = output + `${cell.walls.left ? '|' : ' '} `;
    })
    output = output + '|\n';
  });

  // Bottom walls
  output = output + '+';
  for (let i = 0; i < grid.width; i++) {
    output = output + '——';
  }
  output = output + '—+\n';

  logUpdate(output);
}
