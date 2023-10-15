import css from './TrainsactionHistory.module.css'
import { TransactionItem } from "./TransactionItem";
export const TransactionHistory = ({items}) => {
	return (
		<table className={css.table}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
    {items.map(({id, type, amount, currency}) => {
		return(
			<TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
		)
	})}
  </tbody>
</table>
	)
}