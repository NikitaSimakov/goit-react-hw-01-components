import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';
export function TransactionItem({ transaction }) {
  const { id, type, amount, currency } = transaction;
  return (
    <tbody>
      <tr key={id} className={css[type]}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
