export function createEmptyGrid(width, height) {
  const grid = new Array(height);
  for (let rowIdx = 0; rowIdx < height; rowIdx++) {
    grid[rowIdx] = new Array(width).fill(' ');
  }
  return grid;
}
