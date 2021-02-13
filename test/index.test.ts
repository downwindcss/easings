import * as config from '../src/index';
import easings from '../src/easings';

test('that theme exports all postcss-easings easings', () => {
  const actual = (config as any).theme.extend.transitionTimingFunction;

  expect(actual).toEqual(easings);
});
