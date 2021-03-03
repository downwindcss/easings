import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

let meta = {
  title: 'Example/Button Hover',
  component: Button,
};

export default meta as Meta;

// const Template: Story<ButtonProps> = args => <Button {...args} />;

// const EaseInBack = Template.bind({});
// EaseInBack.args = { easing: 'ease-in-back' };
// const EaseInCirc = Template.bind({});
// EaseInCirc.args = { easing: 'ease-in-circ' };
// const EaseInCubic = Template.bind({});
// EaseInCubic.args = { easing: 'ease-in-cubic' };
// const EaseInExpo = Template.bind({});
// EaseInExpo.args = { easing: 'ease-in-expo' };
// const EaseInOutBack = Template.bind({});
// EaseInOutBack.args = { easing: 'ease-in-out-back' };
// const EaseInOutCirc = Template.bind({});
// EaseInOutCirc.args = { easing: 'ease-in-out-circ' };
// const EaseInOutCubic = Template.bind({});
// EaseInOutCubic.args = { easing: 'ease-in-out-cubic' };
// const EaseInOutExpo = Template.bind({});
// EaseInOutExpo.args = { easing: 'ease-in-out-expo' };
// const EaseInOutQuad = Template.bind({});
// EaseInOutQuad.args = { easing: 'ease-in-out-quad' };
// const EaseInOutQuart = Template.bind({});
// EaseInOutQuart.args = { easing: 'ease-in-out-quart' };
// const EaseInOutQuint = Template.bind({});
// EaseInOutQuint.args = { easing: 'ease-in-out-quint' };
// const EaseInOutSine = Template.bind({});
// EaseInOutSine.args = { easing: 'ease-in-out-sine' };
// const EaseInQuad = Template.bind({});
// EaseInQuad.args = { easing: 'ease-in-quad' };
// const EaseInQuart = Template.bind({});
// EaseInQuart.args = { easing: 'ease-in-quart' };
// const EaseInQuint = Template.bind({});
// EaseInQuint.args = { easing: 'ease-in-quint' };
// const EaseInSine = Template.bind({});
// EaseInSine.args = { easing: 'ease-in-sine' };
// const EaseOutBack = Template.bind({});
// EaseOutBack.args = { easing: 'ease-out-back' };
// const EaseOutCirc = Template.bind({});
// EaseOutCirc.args = { easing: 'ease-out-circ' };
// const EaseOutCubic = Template.bind({});
// EaseOutCubic.args = { easing: 'ease-out-cubic' };
// const EaseOutExpo = Template.bind({});
// EaseOutExpo.args = { easing: 'ease-out-expo' };
// const EaseOutQuad = Template.bind({});
// EaseOutQuad.args = { easing: 'ease-out-quad' };
// const EaseOutQuart = Template.bind({});
// EaseOutQuart.args = { easing: 'ease-out-quart' };
// const EaseOutQuint = Template.bind({});
// EaseOutQuint.args = { easing: 'ease-out-quint' };
// const EaseOutSine = Template.bind({});
// EaseOutSine.args = { easing: 'ease-out-sine' };

const ButtonList = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <main className="grid gap-x-8 gap-y-8 grid-cols-3 w-3/5">
        <Button easing="ease-in-back" />
        <Button easing="ease-in-circ" />
        <Button easing="ease-in-cubic" />
        <Button easing="ease-in-expo" />
        <Button easing="ease-in-out-back" />
        <Button easing="ease-in-out-circ" />
        <Button easing="ease-in-out-cubic" />
        <Button easing="ease-in-out-expo" />
        <Button easing="ease-in-out-quad" />
        <Button easing="ease-in-out-quart" />
        <Button easing="ease-in-out-quint" />
        <Button easing="ease-in-out-sine" />
        <Button easing="ease-in-quad" />
        <Button easing="ease-in-quart" />
        <Button easing="ease-in-quint" />
        <Button easing="ease-in-sine" />
        <Button easing="ease-out-back" />
        <Button easing="ease-out-circ" />
        <Button easing="ease-out-cubic" />
        <Button easing="ease-out-expo" />
        <Button easing="ease-out-quad" />
        <Button easing="ease-out-quart" />
        <Button easing="ease-out-quint" />
        <Button easing="ease-out-sine" />
      </main>
    </div>
  );
};

const Template: Story<ButtonProps> = () => <ButtonList />;
export const ButtonHover = Template.bind({});
