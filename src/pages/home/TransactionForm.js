import React, { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid }) {
    const [transactionName, setTransactionName] = useState("")
    const [amount, setAmount] = useState("")
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({ transactionName, amount, uid: uid });
    }

    //reset form fields on form submit
    useEffect(() => {
        if (response.success) {
            setTransactionName("")
            setAmount("")
        }
    }, [response.success])

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
