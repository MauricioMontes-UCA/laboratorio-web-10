import React, { useState } from "react"
import API from "../utils/api.js"

const SalesForm = () => {
    const [amount, setAmount] = useState("")
    const [customerID, setCustomerID] = useState("")
    const [error, setError] = useState("")

    const handleSaleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await API.post("/sales", { amount, customerID })
            alert("Sale submitted!")
        }
        catch (err) {
            setError(err.response?.data?.message || "Something went wrong!")
        }
        finally {
            setAmount("")
            setCustomerID("")
        }
    }

    return (
        <form onSubmit={handleSaleSubmit}>
            <input type="textfield" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="number" placeholder="customer ID" value={customerID} onChange={(e) => setCustomerID(e.target.value)} min="1" step="1" />
            <button type="submit">Submit</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default SalesForm