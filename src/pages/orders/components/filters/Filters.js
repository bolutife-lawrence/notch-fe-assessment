import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// TODO: :( Find a way to make absolute imports work.
import {
  simpleFilterOrders,
  resetFilters,
  selectSupplierNames,
  selectFilters,
  selectAreFiltersActive,
  selectIsRequestingOrders,
} from "../../../../store/orders";
import { Button, SelectInput } from '../../../../components';

import './style.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSupplierNames);
  const filters = useSelector(selectFilters);
  const areFiltersActive = useSelector(selectAreFiltersActive);
  const isRequestingOrders = useSelector(selectIsRequestingOrders);

  const supplierSelectOptions = suppliers.map((name) => ({ label: name, value: name }));

  const handleFilterChange = ({ value }, { name }) => {
    dispatch(simpleFilterOrders({
      fieldName: name,
      value,
    }));
  };

  const resetAllFilters = () => {
    dispatch(resetFilters({}));
  };

  const filterFieldNames = {
    SUPPLIER: 'vendorName',
  };

  const supplierFilterValue = filters[filterFieldNames.SUPPLIER];

  return (
    <div className="Filters">
      <div className="Filters__inner">
        <div className="Filters__supplier">
          <SelectInput
            label="Supplier"
            placeholder="All Suppliers"
            name={filterFieldNames.SUPPLIER}
            options={supplierSelectOptions}
            onChange={handleFilterChange}
            value={
              supplierFilterValue ? ({ label: supplierFilterValue, value: supplierFilterValue }) : null
            }
            isLoading={isRequestingOrders}
          />
        </div>

        <Button
          type="primary"
          onClick={resetAllFilters}
          disabled={!areFiltersActive}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}

export default Filters;
