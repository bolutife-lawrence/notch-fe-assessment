import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'orders',
  initialState: {
    data: [],
    filterableData: [],
    filters: {},
    error: null,
    isRequesting: null,
  },
  reducers: {
    ordersRequesting(state) {
      state.isRequesting = true;
    },
    ordersRequestSuccess(state, action) {
      state.isRequesting = false;
      state.data = action.payload;
      state.filterableData = action.payload;
    },
    ordersRequestFailure(state, action) {
      state.isRequesting = false;
      state.error = action.payload;
    },
    simpleFilterOrders(state, { payload: { fieldName, value } }) {
      const filters = state.filters;
      const orders = state.data;

      state.filters = { ...filters, [ fieldName ]: value };
      state.filterableData = orders.filter((order) => {
        return (order[ fieldName ]).trim() === value;
      });
    },
    resetFilters(state) {
      state.filters = {};
      state.filterableData = state.data;
    },
  },
});

export default slice;
