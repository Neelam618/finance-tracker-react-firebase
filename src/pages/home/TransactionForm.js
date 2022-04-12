import React, { useState } from 'react'

export default function TransactionForm() {
    const [transactionName, setTransactionName] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ transactionName, amount });
    }

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name:</span>
                    <input type="text" required onChange={(e) => setTransactionName(e.target.value)} value={transactionName} />
                </label>

                <label>
                    <span>Amount:</span>
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount} />
                </label>
                <button type='submit'>Add Transaction</button>
            </form>
        </>
    )
}
