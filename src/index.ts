import { easings } from 'postcss-easings';

module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: Object.assign({}, easings),
    },
  },
};
