import React from 'react';
import Select from 'react-select';

import { globalPropTypes } from '../../utils';

import './style.scss';

const SelectInput = ({ label, size, ...props }) => (
  <div className="SelectInput">
    {label && <label className="SelectInput__label">{label}</label>}
    <Select className={`SelectInput__input SelectInput--${size}-size`} classNamePrefix="SelectInput" {...props} />
  </div>
);

SelectInput.defaultProps = {
  size: 'medium',
}

SelectInput.propTypes = {
  size: globalPropTypes.size,
}

export default SelectInput;
