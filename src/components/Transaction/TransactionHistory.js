import { TransactionItem } from './TransactionItem';
import css from './TransactionHistory.module.css';
export function TransactionHistory(prop) {
  const { transaction } = prop;
  console.log(transaction);

  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.transaction_title}>
          <th className={css.transaction_head}>Type</th>
          <th className={css.transaction_head}>Amount</th>
          <th className={css.transaction_head}>Currency</th>
        </tr>
      </thead>

      {transaction.map(item => (
        <TransactionItem key={item.id} transaction={item} />
      ))}
    </table>
  );
}
