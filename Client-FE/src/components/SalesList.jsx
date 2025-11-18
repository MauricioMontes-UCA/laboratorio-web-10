import { useEffect, useState } from "react";
import API from "../utils/api";

const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                setLoading(true);
                const response = await API.get("/sales");
                setSales(response.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || "Error al cargar los clientes");
                console.error("Error fetching sales:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSales();
    }, []);

    if (loading) {
        return <div className="loading">Cargando ventas...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="sales-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Monto</th>
                        <th>Creado en</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                No hay ventas disponibles
                            </td>
                        </tr>
                    ) : (
                        sales.map((sales) => (
                            <tr key={sales.id}>
                                <td>{sales.id}</td>
                                <td>{sales.amount}</td>
                                <td>{sales.created_at}</td>
                                <td>{sales.name}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SalesList;
