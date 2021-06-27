export const selectSupplierNames = ({ orders: { data } }) =>
  ([...new Set(data.map(({ vendorName }) => vendorName.trim()).sort())]);

export const selectOrders = ({ orders: { filterableData } }) => (filterableData.map(
  ({ id, orderBuyerStatus, deliveryDay, vendorName, isPendingVendorOnboarding, isBYOS, total }) => ({
    id,
    orderBuyerStatus,
    deliveryDay,
    vendorName,
    isPendingVendorOnboarding,
    isBYOS,
    total,
  })
));

export const selectFilters = ({ orders: { filters } }) => filters;

export const selectAreFiltersActive = ({ orders: { filters } }) => (
  Boolean(Object.values(filters).length)
)
