# @downwindcss/easings

A Tailwind CSS [Preset](https://tailwindcss.com/docs/presets) to extend [Transition Timing Function](https://tailwindcss.com/docs/transition-timing-function)s (easings).

## Usage

Once you install and configure (steps below), you can access new easings via `ease-*` prefix.

**Note**: Most of easings are available in https://easings.net/ except some because the preset uses [postcss-easings](https://github.com/postcss/postcss-easings) internally.

```css
ease-easeInSine
ease-easeOutSine
ease-easeInOutSine
ease-easeInQuad
ease-easeOutQuad
ease-easeInOutQuad
ease-easeInCubic
ease-easeOutCubic
ease-easeInOutCubic
ease-easeInQuart
ease-easeOutQuart
ease-easeInOutQuart
ease-easeInQuint
ease-easeOutQuint
ease-easeInOutQuint
ease-easeInExpo
ease-easeOutExpo
ease-easeInOutExpo
ease-easeInCirc
ease-easeOutCirc
ease-easeInOutCirc
ease-easeInBack
ease-easeOutBack
ease-easeInOutBack
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
