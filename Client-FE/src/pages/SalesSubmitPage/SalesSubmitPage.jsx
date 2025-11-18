import React from "react";
import Login from "../../components/SalesForm.jsx";
import "./SalesSubmitPage.css"

const SalesSubmitPage = () => {
    return (
        <div className="form-container">
            <div className="form-box">
                <h1>Registrar nueva venta</h1>
                <Login />
            </div>
        </div>
    )
}

export default SalesSubmitPage