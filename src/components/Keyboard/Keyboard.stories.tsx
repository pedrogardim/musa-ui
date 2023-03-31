import React from 'react';
import { Story, Meta } from '@storybook/react';
import Keyboard from './Keyboard';
import { KeyboardProps } from './Keyboard.types';

export default {
  title: 'Keyboard',
  component: Keyboard,
  argTypes: {},
} as Meta<typeof Keyboard>;

const Template: Story<KeyboardProps> = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <Keyboard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: '#a4abff',
  octaves: 3,
  style: { height: '200px', width: '100%' },
  dark: true,
};
