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
// let meta = {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

export default meta as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const EaseInBack = Template.bind({});
EaseInBack.args = {
  easing: 'ease-in-back',
  children: 'ease-in-back',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
