import React from 'react';
import { useSelector } from 'react-redux';

import { selectOrders } from '../../../../store/orders';

import { Date, Table, Tag } from '../../../../components';

import './style.scss';

const OrdersList = () => {
  const orders = useSelector(selectOrders);

  return (
    <div className="OrderList">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader><h3>Status</h3></Table.ColumnHeader>
            <Table.ColumnHeader><h3>Delivery Day</h3></Table.ColumnHeader>
            <Table.ColumnHeader><h3>Supplier</h3></Table.ColumnHeader>
            <Table.ColumnHeader><h3>Total</h3></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.map(renderOrder)}
        </Table.Body>
      </Table>
    </div>
  );
}

const orderStatusColors = {
  PAID: 'sinbad',
  DELIVERED: 'melrose',
  'IN SHOPPING CART': 'platinum',
}

function renderOrder(
  {
    id,
    deliveryDay,
    isBYOS,
    isPendingVendorOnboarding,
    orderBuyerStatus,
    vendorName,
    total,
  }
) {
  const orderBuyerStatusInUpperCase = orderBuyerStatus.toUpperCase()

  return (
    <Table.Row className="bold-text-500" key={id}>
      <Table.Cell>
        <Tag color={orderStatusColors[ orderBuyerStatusInUpperCase ]}>
          {orderBuyerStatusInUpperCase}
        </Tag>
      </Table.Cell>

      <Table.Cell>
        {Boolean(deliveryDay) && <Date>{deliveryDay}</Date>}
      </Table.Cell>

      <Table.Cell>
        {vendorName}&nbsp;&nbsp;
        {!isBYOS && <Tag type="squared" color="beltic-sea">MARKET</Tag>}&nbsp;&nbsp;
        {isPendingVendorOnboarding && <Tag color="paris-daisy">1st</Tag>}
      </Table.Cell>

      <Table.Cell>
        {Boolean(total) && `$${total.toFixed(2)}`}
      </Table.Cell>
    </Table.Row>
  );
}

export default OrdersList;
