import React from 'react';

import { extendClassName } from '../../utils';

import './style.scss';

// TODO: Children Type validation

const Table = ({ children, className }) => (
  <div className="TableContainer">
    <table className={extendClassName('TableContainer__table', className)}>
      {children}
    </table>
  </div>
);

const Header = ({ children, className }) => (
  <thead className={extendClassName('TableContainer__table-header', className)}>
    {children}
  </thead>
);

const ColumnHeader = ({ children, className }) => (
  <th scope="col" className={extendClassName('TableContainer__table-column-header', className)}>
    {children}
  </th>
);

const Body = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

const Cell = ({ children, className }) => (
  <td className={extendClassName('TableContainer__table-cell', className)}>
    {children}
  </td>
);

const Row = ({ children, className }) => (
  <tr className={extendClassName('TableContainer__table-row', className)}>
    {children}
  </tr>
);

Table.Header = Header;
Table.ColumnHeader = ColumnHeader;
Table.Body = Body;
Table.Cell = Cell;
Table.Row = Row;

export default Table;
