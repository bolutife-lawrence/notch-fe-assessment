import React from 'react';

import buttonTypes from "./types";
import './style.scss';

const Button = ({ children, size, type, ...props }) => (
  <button className={`Button Button--${type} Button--${size}-size`} {...props}>{children}</button>
);

Button.defaultProps = {
  type: buttonTypes.primary,
  size: 'medium',
}

export default Button;
