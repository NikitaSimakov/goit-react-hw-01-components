import { TransactionItem } from './TransactionItem';
export function TransactionHistory(prop) {
  const { transaction } = prop;
  console.log(transaction);

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transaction.map(item => (
        <TransactionItem key={item.id} transaction={item} />
      ))}
    </table>
  );
}
