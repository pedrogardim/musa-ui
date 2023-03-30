import React from 'react';
import { Story, Meta } from '@storybook/react';
import Knob from './Knob';
import { KnobProps } from './Knob.types';

export default {
  title: 'Marbella/Knob',
  component: Knob,
  argTypes: {},
} as Meta<typeof Knob>;

const Template: Story<KnobProps> = (args) => <Knob {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  primary: true,
  disabled: false,
  text: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  size: 'medium',
  primary: true,
  disabled: true,
  text: 'Succsadsad',
};
