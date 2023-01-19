// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expense} = moneyDetails

  return (
    <>
      <div className="transaction-item balance">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Balance</p>
            <p className="transaction-count" data-testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
      </div>
      <div className="transaction-item income">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Income</p>
            <p className="transaction-count" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
      </div>
      <div className="transaction-item expenses">
        <div className="transaction-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="transaction-image"
          />
          <div>
            <p className="transaction-name">Your Expenses</p>
            <p className="transaction-count" data-testid="expensesAmount">
              Rs {expense}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
