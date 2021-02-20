import { easings } from 'postcss-easings';

const kebabCased = Object.entries(easings).filter((entry: [string, unknown]) =>
  entry[0].startsWith('ease-')
);

const cleanedEntries = kebabCased.map((entry: [string, unknown]) => {
  return [entry[0].replace('ease-', ''), entry[1] as string];
});

export default Object.fromEntries(cleanedEntries);
