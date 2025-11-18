import { useEffect, useState } from "react";
import API from "../utils/api";

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await API.get("/sales/report");
                setReports(response.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || "Error al cargar los clientes");
                console.error("Error fetching sales:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    if (loading) {
        return <div className="loading">Cargando reportes...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="report-list">
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Ventas totales</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length === 0 ? (
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }}>
                                No hay reportes disponibles
                            </td>
                        </tr>
                    ) : (
                        reports.map((report) => (
                            <tr key={report.name}>
                                <td>{report.name}</td>
                                <td>{report.total_sales}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ReportList;
