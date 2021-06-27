import React from 'react';

import './style.scss';

const Tag = ({ children, color, type }) => (
  <span
    className={`Tag Tag--${type} Tag--${color}-color`}
  >
    {children}
  </span>
);

Tag.defaultProps = {
  color: 'melrose',
  type: 'rounded'
}

export default Tag;
