import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestOrders } from '../../store/orders';

import { Filters, OrdersList } from './components';

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestOrders());
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <OrdersList />
    </div>
  );
}

export default Orders;
