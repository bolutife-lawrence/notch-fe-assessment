import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LibDate = window.Date;

const defaultDateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const Date = ({ children: dateString }) => (
  <span>
    {new LibDate(dateString).toLocaleDateString('en-US', defaultDateOptions)}
  </span>
);

Date.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Date;
