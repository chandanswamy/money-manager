import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: 0,
    activeOptionId: '',
    balance: 0,
    income: 0,
    expense: 0,
  }

  onAddTransaction = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onSelectTransctionType = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onAddTransaction = () => {}

  render() {
    const {
      activeOptionId,
      title,
      amount,
      transactionsList,
      balance,
      income,
      expense,
    } = this.state
    const moneyDetails = {
      balance,
      income,
      expense,
    }

    return (
      <div className="app-container">
        <div className="money-manager">
          <div className="section-one">
            <h1 className="greeting-name">Hi, Richard</h1>
            <p className="welcome-msg">
              Welcome back to your
              <span className="highlighting"> Money Manager</span>
            </p>
          </div>
          <div className="section-two">
            <ul className="transaction-items-container">
              <MoneyDetails moneyDetails={moneyDetails} />
            </ul>
          </div>
          <div className="section-three">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="form-heading">Add Transaction</h1>
              <label>
                TITLE
                <input
                  value={title}
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onTitleChange}
                />
              </label>
              <label>
                AMOUNT
                <input
                  value={amount}
                  type="number"
                  placeholder="AMOUNT"
                  onChange={this.onAmountChange}
                />
              </label>
              <label>
                TYPE
                <select
                  value={activeOptionId}
                  onChange={this.onSelectTransctionType}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </label>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="transaction-index">
              <h1 className="transactions-heading">History</h1>
              <ul className="transaction-index-items-container">
                <li className="transaction-index-item">
                  <p className="index-heading">Title</p>
                  <p className="index-heading">Amount</p>
                  <p className="index-heading">Type</p>
                </li>
                {transactionsList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.transactionId}
                    transactionDetails={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
