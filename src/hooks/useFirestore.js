import { useReducer, useState, useEffect } from 'react'
import { projectFirestore, timestamp } from "../firebase/config"

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "IS_PENDING":
            return { isPending: true, document: null, success: false, error: null }
        case "ADDED_DOC":
            return { isPending: false, document: action.payload, success: true, error: null }
        case "ERROR":
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state
    }
}

export const useFireStore = (collection) => {          //transactions
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    //collection ref
    const ref = projectFirestore.collection(collection)

    //only dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }

    //add a document
    const addDocument = async (doc) => {
        dispatch({ type: "IS_PENDING" })
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDoc = await ref.add({ ...doc, createdAt: createdAt })              //name, amount: doc
            dispatchIfNotCancelled({ type: "ADDED_DOC", payload: addedDoc })
        }
        catch (err) {
            dispatchIfNotCancelled({ type: "ERROR", payload: err.message })
        }
    }

    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}