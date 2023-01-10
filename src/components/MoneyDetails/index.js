// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expense} = moneyDetails

  return (
    <>
      <li className="transaction-item balance">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Balance</p>
            <p className="transaction-count">Rs {balance}</p>
          </div>
        </div>
      </li>
      <li className="transaction-item income">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Income</p>
            <p className="transaction-count">Rs {income}</p>
          </div>
        </div>
      </li>
      <li className="transaction-item expenses">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Expenses</p>
            <p className="transaction-count">Rs {expense}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails