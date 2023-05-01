// import { clsx } from 'clsx';
import css from './TransactionItem.module.css';
export function TransactionItem({ transaction }) {
  return (
    <tbody>
      <tr className={css[transaction.type]}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    </tbody>
  );
}
