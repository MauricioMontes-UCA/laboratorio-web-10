import pool from "../database/pg.connection.js"

class CustomerRepository {
    async selectAll() {
        try {
            const query = await pool.query(
                'SELECT * FROM customers'
            );
            return query.rows;    
        } 
        catch (err) {
            throw new Error("Error al obtener los clientes de la base de datos");
        }
    }

    async selectById(id) {
        try {
            const query = await pool.query(
                'SELECT * FROM customers WHERE id = $1', [id]
            )
            return query.rows;
        }
        catch (err) {
            throw new Error("Error al obtener al cliente de la base de datos");
        }
    }

    async selectByCode(code) {
        try {
            const query = await pool.query(
                'SELECT * FROM customers WHERE code = $1', [code]
            )
            return query.rows;
        }
        catch (err) {
            throw new Error("Error al obtener al cliente de la base de datos");
        }
    }
}

const customerRepository = new CustomerRepository()

export default customerRepository;