import * as config from '../src/index';
import { easings } from 'postcss-easings';

xtest('that theme exports all postcss-easings easings', () => {
  const actual = (config as any).theme.extend.transitionTimingFunction;

  const snakeEntries = Object.entries(actual).filter((entry: any) =>
    entry[0].startsWith('ease-')
  );

  const cleanedEntries = snakeEntries.map((entry: [string, unknown]) => {
    return [entry[0].replace('ease-', ''), entry[1] as string];
  });

  console.info({ snakeEntries, cleanedEntries });
  expect(easings).toEqual(actual);
});
