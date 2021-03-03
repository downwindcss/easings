import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

let meta = {
  title: 'Example/Button Hover',
  component: Button,
};

export default meta as Meta;

const ButtonList = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <main
        className="grid h-screen-80 w-11/12   
                   gap-y-8 grid-cols-2   
                   lg:gap-y-8 lg:grid-cols-3
      "
      >
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
