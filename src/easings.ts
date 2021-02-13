import { easings } from 'postcss-easings';

const snakeEntries = Object.entries(
  easings
).filter((entry: [string, unknown]) => entry[0].startsWith('ease-'));

const cleanedEntries = snakeEntries.map((entry: [string, unknown]) => {
  return [entry[0].replace('ease-', ''), entry[1] as string];
});

export default Object.fromEntries(cleanedEntries);
