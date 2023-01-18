// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransactionItem} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransactionItem = () => {
    deleteTransactionItem(id)
  }

  return (
    <li className="transaction-index-item">
      <p className="index-heading">{title}</p>
      <p className="index-heading">{amount}</p>
      <p className="index-heading">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteTransactionItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
