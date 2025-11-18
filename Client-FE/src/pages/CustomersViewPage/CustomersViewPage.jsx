import CustomerList from "../../components/CustomerList.jsx"
import "./CusomtersViewPage.css"

const CustomersViewPage = () => {
    return (
        <div className="list-container">
            <div className="list-box">
                <h1>Lista de clientes</h1>
                <CustomerList />
            </div>
        </div>
    )
}

export default CustomersViewPage