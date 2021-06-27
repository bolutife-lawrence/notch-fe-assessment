import React from 'react';

import './style.scss';

const LibDate = window.Date;

const defaultDateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const Date = ({ children: dateString }) => (
  <span>
    {new LibDate(dateString).toLocaleDateString('en-US', defaultDateOptions)}
  </span>
);

export default Date;
