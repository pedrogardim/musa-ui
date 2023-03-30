import React, { FC } from 'react';

import { KnobProps } from './Knob.types';

import './Knob.scss';

const Knob: FC<KnobProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Knob;
