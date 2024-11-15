const pool = require('../config.js');

const Car = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM cars');
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id]);
        return result.rows[0];
    },

    create: async ({ model, manufactured_year, price, stock }) => {
        const result = await pool.query(
            'INSERT INTO cars (model, manufactured_year, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [model, manufactured_year, price, stock]
        );
        return result.rows[0];
    },

    update: async ({ id, price, stock }) => {
        const result = await pool.query(
            'UPDATE cars SET price = $1, stock = $2 WHERE id = $3 RETURNING *',
            [ price, stock, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        const result = await pool.query('DELETE FROM cars WHERE id = $1', [id]);
        return result.rowCount > 0;
    },
};

module.exports = Car;