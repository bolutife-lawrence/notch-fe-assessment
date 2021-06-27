import React from 'react';

import { extendClassName } from '../../utils';

import './style.scss';

// TODO: Children Type validation
const Table = ({ children }) => (
  <div className="TableContainer">
    <table className="TableContainer__table">
      {children}
    </table>
  </div>
);

const Header = ({ children }) => (
  <thead className="TableContainer__table-header">
    {children}
  </thead>
);

const ColumnHeader = ({ children }) => (
  <th scope="col" className="TableContainer__table-column-header">
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
