import React, { FC } from 'react';
import { css } from '@linaria/core';
import { exportedStyle } from './Export';

const innerStyle = css`
  color: blue;
`;

const testStyle = css`
  background: red;

  .${innerStyle} {
    color: red;
  }

  .${exportedStyle} {
    background: blue;
  }
`;

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  text?: string;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, text }) => (
  <button
    type="button"
    className={testStyle}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
