import css from './TransactionItem.module.css';
export function TransactionItem({ transaction }) {
  // const backgroundStyle = () => transaction.type === 'invoice' ?
  return (
    <tbody>
      <tr className={`${transaction.type}`}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    </tbody>
  );
}
