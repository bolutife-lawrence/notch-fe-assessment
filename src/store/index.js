import { configureStore } from '@reduxjs/toolkit';

import { reducer as ordersReducer } from './orders';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
});
