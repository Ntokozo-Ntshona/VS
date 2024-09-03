import React, { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../components/balance';
import AddTransactions from '../components/addtransactions';
import { addTransaction, deleteTransactions } from '../redux/action';
import TransactionList from '../components/transactionList';
import IncomeExpense from '../components/IncomeExpense';



export class Main extends Component {
  render() {
    const { transactions, addTransaction, deleteTransactions } = this.props
    console.log(transactions)
    return (
      <div>
       <Balance transactions={transactions}/>
       <IncomeExpense transactions={transactions}/>
       <TransactionList transactions={transactions} deleteTransactions={(id) => deleteTransactions(id)}/>
       <AddTransactions
        addTransaction={(transaction) => addTransaction(transaction)}
         id={transactions[0] ? transactions[0].id + 1 : 1}
         />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
     addTransaction: (transaction) => dispatch(addTransaction(transaction)),
     deleteTransactions: (id) => dispatch(deleteTransactions(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);