import customerServices from "../services/customer.services.js";

class CustomerController {
    async getAllCustomers(req, res) {
        try {
            const data = await customerServices.getCustomers();
            console.info("Clientes obtenidos exitosamente");
            res.status(200).json(data)
        } 
        catch (err) {
            console.error("Error al buscar los clientes");
            res.status(500).json({ message: err.message });
        }
    }

    async getCustomerByCode(req, res) {
        try {
            const data = await customerServices.getCustomerByCode(req.query.code);

            if (!data) {
                console.error("Cliente no encontrado");
                res.status(404).json({ message: "Cliente no encontrado" })
            }

            console.info("Cliente obtenido exitosamente");
            res.status(200).json(data)
        } 
        catch (err) {
            console.error("Error al buscar al cliente");
            res.status(500).json({ message: err.message });
        }
    }
}

const customerController = new CustomerController();

export default customerController;