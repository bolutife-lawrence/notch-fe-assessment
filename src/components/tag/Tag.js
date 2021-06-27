import React from 'react';
import PropTypes from 'prop-types';

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

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['squared', 'rounded']),
  color: PropTypes.oneOf([
    'melrose',
    'sinbad',
    'beltic-sea',
    'platinum',
    'paris-daisy',
  ]),
}

export default Tag;
