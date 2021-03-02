import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, easings, Easing } from './Button';

let meta = {
  title: 'Example/Button',
  component: Button,
  // argTypes: {
  //   easing: { control: 'color' },
  // },
};

export default meta as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const EaseInBack = Template.bind({});
EaseInBack.args = { easing: 'ease-in-back', children: 'ease-in-back' };
export const EaseInCirc = Template.bind({});
EaseInCirc.args = { easing: 'ease-in-circ', children: 'ease-in-circ' };
export const EaseInCubic = Template.bind({});
EaseInCubic.args = { easing: 'ease-in-cubic', children: 'ease-in-cubic' };
export const EaseInExpo = Template.bind({});
EaseInExpo.args = { easing: 'ease-in-expo', children: 'ease-in-expo' };
export const EaseInOutBack = Template.bind({});
EaseInOutBack.args = {
  easing: 'ease-in-out-back',
  children: 'ease-in-out-back',
};
export const EaseInOutCirc = Template.bind({});
EaseInOutCirc.args = {
  easing: 'ease-in-out-circ',
  children: 'ease-in-out-circ',
};
export const EaseInOutCubic = Template.bind({});
EaseInOutCubic.args = {
  easing: 'ease-in-out-cubic',
  children: 'ease-in-out-cubic',
};
export const EaseInOutExpo = Template.bind({});
EaseInOutExpo.args = {
  easing: 'ease-in-out-expo',
  children: 'ease-in-out-expo',
};
export const EaseInOutQuad = Template.bind({});
EaseInOutQuad.args = {
  easing: 'ease-in-out-quad',
  children: 'ease-in-out-quad',
};
export const EaseInOutQuart = Template.bind({});
EaseInOutQuart.args = {
  easing: 'ease-in-out-quart',
  children: 'ease-in-out-quart',
};
export const EaseInOutQuint = Template.bind({});
EaseInOutQuint.args = {
  easing: 'ease-in-out-quint',
  children: 'ease-in-out-quint',
};
export const EaseInOutSine = Template.bind({});
EaseInOutSine.args = {
  easing: 'ease-in-out-sine',
  children: 'ease-in-out-sine',
};
export const EaseInQuad = Template.bind({});
EaseInQuad.args = { easing: 'ease-in-quad', children: 'ease-in-quad' };
export const EaseInQuart = Template.bind({});
EaseInQuart.args = { easing: 'ease-in-quart', children: 'ease-in-quart' };
export const EaseInQuint = Template.bind({});
EaseInQuint.args = { easing: 'ease-in-quint', children: 'ease-in-quint' };
export const EaseInSine = Template.bind({});
EaseInSine.args = { easing: 'ease-in-sine', children: 'ease-in-sine' };
export const EaseOutBack = Template.bind({});
EaseOutBack.args = { easing: 'ease-out-back', children: 'ease-out-back' };
export const EaseOutCirc = Template.bind({});
EaseOutCirc.args = { easing: 'ease-out-circ', children: 'ease-out-circ' };
export const EaseOutCubic = Template.bind({});
EaseOutCubic.args = { easing: 'ease-out-cubic', children: 'ease-out-cubic' };
export const EaseOutExpo = Template.bind({});
EaseOutExpo.args = { easing: 'ease-out-expo', children: 'ease-out-expo' };
export const EaseOutQuad = Template.bind({});
EaseOutQuad.args = { easing: 'ease-out-quad', children: 'ease-out-quad' };
export const EaseOutQuart = Template.bind({});
EaseOutQuart.args = { easing: 'ease-out-quart', children: 'ease-out-quart' };
export const EaseOutQuint = Template.bind({});
EaseOutQuint.args = { easing: 'ease-out-quint', children: 'ease-out-quint' };
export const EaseOutSine = Template.bind({});
EaseOutSine.args = { easing: 'ease-out-sine', children: 'ease-out-sine' };
