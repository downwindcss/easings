# @downwindcss/easings

A Tailwind CSS [Preset](https://tailwindcss.com/docs/presets) to extend [Transition Timing Function](https://tailwindcss.com/docs/transition-timing-function)s (easings).

## Usage

Once you install and configure (steps below), you can access new easings via `ease-*` prefix.

**Note**: Most of easings are available in https://easings.net/ except some because the preset uses [postcss-easings](https://github.com/postcss/postcss-easings) internally.

```css
ease-in-back
ease-in-circ
ease-in-cubic
ease-in-expo
ease-in-out-back
ease-in-out-circ
ease-in-out-cubic
ease-in-out-expo
ease-in-out-quad
ease-in-out-quart
ease-in-out-quint
ease-in-out-sine
ease-in-quad
ease-in-quart
ease-in-quint
ease-in-sine
ease-out-back
ease-out-circ
ease-out-cubic
ease-out-expo
ease-out-quad
ease-out-quart
ease-out-quint
ease-out-sine
```

## Installation

```bash
$ npm install --save-dev @downwindcss/easings
# Or using a short-form flag
$ npm install -D @downwindcss/easings
```

Using `yarn`.

```bash
$ yarn add --dev @downwindcss/easings
# or
$ yarn add -D @downwindcss/easings
```

## Configuration

Add the preset, `@downwindcss/easings` to the Tailwind CSS configuration file, `tailwind.config.js`.

```js
module.exports = {
  presets: [require('@downwindcss/easings')],
  // rest of configuration...
};
```
