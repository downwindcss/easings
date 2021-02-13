import * as config from '../src/index';
import { easings } from 'postcss-easings';

test('that theme exports all postcss-easings easings', () => {
  const actual = (config as any).theme.extend.transitionTimingFunction;
  expect(easings).toEqual(actual);
});
