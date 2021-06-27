import { BASE_API_URL } from '../../constants';

import { default as slice } from './slice';

export const {
  ordersRequesting,
  ordersRequestSuccess,
  ordersRequestFailure,
  simpleFilterOrders,
  resetFilters,
} = slice.actions;

export const requestOrders = () => async (dispatch) => {
  try {
    dispatch(ordersRequesting());

    const orders = await fetch(`${BASE_API_URL}/orders/search`,{
      method: 'POST',
      body: JSON.stringify({}),
    }).then((response) => response.json());

    dispatch(ordersRequestSuccess(orders.data));
  } catch (error) {
    dispatch(ordersRequestFailure(error.toString()));
  }
}
