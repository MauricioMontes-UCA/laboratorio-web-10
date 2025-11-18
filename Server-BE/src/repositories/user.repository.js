import pool from "../database/pg.connection.js";

class UserRepository {
    async selectAll() {
        const query = await pool.query(
            'SELECT * FROM users ORDER BY id ASC'
        );
        return query.rows;
    }

    async selectByID(id) {
        const query = await pool.query(
            'SELECT * FROM users WHERE id = $1', [id]
        );

        if (query.rows.length === 0) return null;

        return query.rows;
    }

    async selectByEmail(email) {
        const query = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        );

        if (query.rows.length === 0) return null;

        return query.rows[0];
    }

    async insert(name, email, password) {
        const query = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]
        );
        return query.rows[0];
    }

    async update(id, name, email, password) {
        const query = await pool.query(
            'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *', [name, email, password, id]
        );
        return query.rows[0];
    }

    async delete(id) {
        const query = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *', [id]
        );
        return query.rows[0];
    }
}

export const userRepository = new UserRepository()