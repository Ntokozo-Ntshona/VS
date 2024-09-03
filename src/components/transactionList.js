import React from "react";
import Transactions from "./Transactions";

export default function TransactionList({transactions, deleteTransactions}) {

    transactions = transactions.sort((a, b) => {
        return  new Date(b.date) - new Date(a.date)
    })
    return(
        <div>
            <h3>Transactions</h3>
            <ul className="list">
               {transactions.map((transaction) => (
                    <Transactions 
                    key={transaction.id} 

                    transaction={transaction}
                    
                    deleteTransactions={ deleteTransactions}
                    
                    />
                
               ) ) }
            </ul>
        </div>
    );
}