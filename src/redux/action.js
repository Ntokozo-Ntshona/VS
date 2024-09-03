export const ADD_TRANSACTION = "ADD_TRANSACTION"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"

export const  addTransaction = (transaction) => {
    return {
    type: ADD_TRANSACTION,
    payload: transaction
 };
};

export const  deleteTransactions = (transactionId) => {
    return {
    type: DELETE_TRANSACTION,
    payload: transactionId
 };
};
