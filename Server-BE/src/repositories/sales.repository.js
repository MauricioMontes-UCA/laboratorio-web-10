import pool from "../database/pg.connection.js";

class SalesRepository {
    async selectAll() {
        try {
            const query = await pool.query(
                'SELECT s.id, s.amount, s.created_at, c.name FROM sales s JOIN customers c ON s.id_customer = c.id'
            );
            return query.rows;    
        } 
        catch (err) {
            throw new Error("Error al obtener las ventas de la base de datos");
        }
    }

    async insert(amount, customerID) {
        try {
            const query = await pool.query(
                'INSERT INTO sales (amount, id_customer, created_at) VALUES ($1, $2, NOW()) RETURNING *', [amount, customerID]
            );
            return query.rows;
        } 
        catch (err) {
            throw new Error("Error al agregar venta a la base de datos");
        }
    }

    async selectAllReports() {
        try {
            const query = await pool.query(
                'SELECT c.name, SUM(s.amount) AS total_sales FROM sales s JOIN customers c ON s.id_customer = c.id GROUP BY c.name'
            );
            return query.rows;    
        } 
        catch (err) {
            throw new Error("Error al obtener las ventas de la base de datos");
        }
    }
}

const salesRepository = new SalesRepository()

export default salesRepository;