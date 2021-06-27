import React from 'react';

import rollingEggGifUrl from './rolling-egg.gif';

import './style.scss';

const OrdersPreLoader = () => (
  <img className="Preloader" src={rollingEggGifUrl} alt="Orders Pre-loader" />
);

export default OrdersPreLoader;
