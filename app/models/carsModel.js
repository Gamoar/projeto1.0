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

    create: async ({ model, manufactured_year, price }) => {
        const result = await pool.query(
            'INSERT INTO cars (model, manufactured_year, price) VALUES ($1, $2, $3) RETURNING *',
            [model, manufactured_year, price]
        );
        return result.rows[0];
    },

    update: async ({ id, price }) => {
        const result = await pool.query(
            'UPDATE cars SET price = $1 = $2 WHERE id = $3 RETURNING *',
            [ price, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        const result = await pool.query('DELETE FROM cars WHERE id = $1', [id]);
        return result.rowCount > 0;
    },
};

module.exports = Car;