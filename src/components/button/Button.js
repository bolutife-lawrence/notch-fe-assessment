import React from 'react';
import PropTypes from 'prop-types';

import { globalPropTypes } from '../../utils';

import './style.scss';

const Button = ({ children, size, type, ...props }) => (
  <button className={`Button Button--${type} Button--${size}-size`} {...props}>{children}</button>
);

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  size: globalPropTypes.size,
  type: PropTypes.oneOf(['primary']), // Will be updated as more button types are added
}

export default Button;
