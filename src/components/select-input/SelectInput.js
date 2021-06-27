import React from 'react';
import Select from 'react-select';

import './style.scss';

const SelectInput = ({ label, size, ...props }) => (
  <div className="SelectInput">
    {label && <label className="SelectInput__label">{label}</label>}
    <Select className={`SelectInput__input SelectInput--${size}-size`} classNamePrefix="SelectInput" {...props} />
  </div>
);

SelectInput.defaultProps = {
  size: 'medium'
}

export default SelectInput;
