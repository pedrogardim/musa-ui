import { MouseEventHandler } from 'react';
export interface KnobProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
