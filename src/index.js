import logUpdate from 'log-update';

const width = 20;
const height = 10;
const frames = ['-', '\\', '|', '/'];
const grid = createEmptyGrid(width, height);

function createEmptyGrid(width, height) {
  const grid = new Array(height);
  for (let rowIdx = 0; rowIdx < height; rowIdx++) {
    grid[rowIdx] = new Array(width).fill(' ');
  }
  return grid;
}

function renderGrid(grid) {
  let output = '';

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
    row.forEach(cell => { output = output + cell; })
    output = output + '|\n';
  });

  addTopBottomBorder();

  return output;
}

function main() {
  let index = 0;
  setInterval(() => {
    const frame = frames[index = ++index % frames.length];
    logUpdate(`${frame} mazes are amazing ${frame}\n${renderGrid(grid)}`);
  }, 80);
}

main();