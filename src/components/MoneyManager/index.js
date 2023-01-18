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
    amount: '',
    activeOptionId: transactionTypeOptions[0].optionId,
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onSelectTransactionType = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, activeOptionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === activeOptionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      activeOptionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransactionItem = id => {
    const {transactionsList} = this.state
    const filteredTransactionList = transactionsList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transactionsList: filteredTransactionList})
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      } else {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(eachTransaction.amount)
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(eachTransaction.amount)
      }
    })

    return incomeAmount
  }

  render() {
    const {activeOptionId, title, amount, transactionsList} = this.state

    const balance = this.getBalance()
    const income = this.getIncome()
    const expense = this.getExpenses()

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
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.onAmountChange}
                />
              </label>
              <label>
                TYPE
                <select
                  value={activeOptionId}
                  onChange={this.onSelectTransactionType}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option key={eachItem.optionId} value={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="transaction-index">
              <h1 className="transactions-heading">History</h1>
              <div>
                <ul className="transaction-index-items-container">
                  <li className="transaction-index-item">
                    <p className="index-heading">Title</p>
                    <p className="index-heading">Amount</p>
                    <p className="index-heading">Type</p>
                  </li>
                  {transactionsList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      transactionDetails={eachItem}
                      deleteTransactionItem={this.deleteTransactionItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
