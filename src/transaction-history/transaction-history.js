import PropTypes from 'prop-types';
import { Table, TableHead, TD, TableBody } from './transaction.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      {items.map(({ id, type, amount, currency }) => (
        <TableBody key={id}>
          <tr>
            <TD>{type}</TD>
            <TD>{amount}</TD>
            <TD>{currency}</TD>
          </tr>
        </TableBody>
      ))}
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
