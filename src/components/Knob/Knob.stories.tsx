import React from 'react';
import { Story, Meta } from '@storybook/react';
import Knob from './Knob';
import { KnobProps } from './Knob.types';

export default {
  title: 'Knob',
  component: Knob,
  argTypes: {},
} as Meta<typeof Knob>;

const Template: Story<KnobProps> = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <Knob {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 0.5,
  polar: false,
  size: 64,
  min: 0,
  max: 1,
  logScale: false,
  step: 0.01,
  onChange: () => {},
  onChangeCommited: () => {},
  color: '#3f51c5',
  disabled: false,
  label: 'Volume',
  showValue: true,
};
