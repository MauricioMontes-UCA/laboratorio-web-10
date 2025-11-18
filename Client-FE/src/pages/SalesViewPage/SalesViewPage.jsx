import SalesList from "../../components/SalesList"
import "./SalesViewPage.css"

const SalesViewPage = () => {
    return (
        <div className="list-container">
            <div className="list-box">
                <h1>Lista de ventas</h1>
                <SalesList />
            </div>
        </div>
    )
}

export default SalesViewPage