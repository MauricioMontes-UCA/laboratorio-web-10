import React, { useState } from "react"
import API from "../utils/api.js"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await API.post("/auth/signin", { email, password })
            alert("Login succesful! Welcome " + response.data.name)
        }
        catch (err) {
            setError(err.response?.data?.message || "Something went wrong!")
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login