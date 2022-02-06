import logUpdate from 'log-update';

const frames = ['-', '\\', '|', '/'];
let index = 0;

setInterval(() => {
  const frame = frames[index = ++index % frames.length];

  logUpdate(`${frame} mazes are amazing ${frame}`);
}, 80);
