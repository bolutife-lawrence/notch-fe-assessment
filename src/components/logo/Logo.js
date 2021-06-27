import React from 'react';

import logoUrl from '../../assets/logo.svg';

import "./style.scss"

const Logo = ({ size }) => (
  <img src={logoUrl} className={`Logo Logo--${size}-size`} alt="Notch Logo" />
);

Logo.defaultProps = {
  size: 'large',
}

export default Logo;
