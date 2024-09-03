import React from "react"

export default function Balance({ transactions }) {
    console.log(transactions)
const amount = transactions.map((transaction) => Number(transaction.amount));
const total = amount.reduce((acc, item) => (acc + item), 0)
return (
        <div>
        <h4>balance</h4>
        <h1>R{total}</h1>
        </div>
    )
}