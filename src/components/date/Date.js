import React from 'react';

import './style.scss';

const LibDate = window.Date;

const defaultDateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const Date = ({ children: date }) => (
  <span>
    {new LibDate(date).toLocaleDateString('en-US', defaultDateOptions)}
  </span>
);

export default Date;
