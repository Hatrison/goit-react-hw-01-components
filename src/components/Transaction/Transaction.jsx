import PropTypes from 'prop-types';
import { Cell } from './Transaction.styled';

export const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <tr>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </tr>
  );
};

Transaction.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
