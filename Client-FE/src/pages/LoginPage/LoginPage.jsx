import React from "react";
import Login from "../../components/Login.jsx";
import "./LoginPage.css"

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Iniciar Sesión</h1>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage