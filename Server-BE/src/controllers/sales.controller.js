import salesServices from "../services/sales.services.js";

class SalesController {
    async getAllSales(req, res) {
        try {
            const data = await salesServices.getSales();
            console.info("Ventas obtenidas exitosamente");
            res.status(200).json(data)
        } 
        catch (err) {
            console.error("Error al buscar las ventas");
            res.status(500).json({ message: err.message });
        }
    }

    async getAllReports(req, res) {
        try {
            const data = await salesServices.getReports();
            console.info("Reportes obtenidos exitosamente");
            res.status(200).json(data)
        } 
        catch (err) {
            console.error("Error al obtener los reportes");
            res.status(500).json({ message: err.message });
        }
    }

    async addNewSale(req, res) {
        try {
            const { amount, customerID } = req.body;

            const result = await salesServices.newSale(amount, customerID);

            if (!result) {
                console.error("No existe un cliente con la ID provista")
                res.status(400).json({ message: "No existe un cliente con la ID provista" })
            }
            else {
                console.info("Venta agregada exitosamente");
                res.status(201).json(result)
            }
        } 
        catch (err) {
            console.error("Error al agregar la venta");
            res.status(500).json({ message: err.message });
        }
    }
}

const salesController = new SalesController();

export default salesController;