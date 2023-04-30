export function TransactionItem({ transaction }) {
  return (
    <tbody>
      <tr>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    </tbody>
  );
}
