import React from 'react';

export default function Transactions({ transaction, deleteTransactions }) {
    let sign = transaction.amount > 0 ? "+" : "-";

    return (
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            {transaction.text}
            <span>
                <span style={{ marginRight: 9 }}>
                    {transaction.date}
                </span>
                {sign}R{Math.abs(transaction.amount)}
            </span>
            <button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-trash-fill" 
                    viewBox="0 0 16 16"
                >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zM10 6v7a.5.5 0 0 0 1 0V6a.5.5 0 0 0-1 0zM4.5 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1H15a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h3.5zM3 2a1 1 0 0 0-1 1v1h12V3a1 1 0 0 0-1-1H3zm1 2v9.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4H4z"/>
                </svg>
            </button>
        </li>
    );
};
