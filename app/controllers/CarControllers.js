const Car = require('../models/carsModel');

const carController = {
    getAllCars: async (req, res) => {
        try {
            const cars = await Car.getAll();
            res.json(cars);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter os Carros' });
        }
    },

    getCarById: async (req, res) => {
        try {
            const { id } = req.params;
            const car = await Car.getById(id);
            if (car) {
                res.json(car);
            } else {
                res.status(404).json({ error: 'Carro não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter o Carro' });
        }
    },

    createCar: async (req, res) => {
        try {
            const { model, cpf, manufactured_year, price, stock } = req.body;
            const newcar = await Car.create(req.body);
            res.status(201).json(newcar);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erro ao criar o Carro' });
        }
    },
    updateCar: async (req, res) => {
        try {
            const { id } = req.params;
            const { price, stock } = req.body;
            const updatecar = await Car.update({price, stock, id});
            if (updatecar) {
                res.json(updatecar);
            } else {
                res.status(404).json({ error: 'Carro não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o Carro' });
            console.log(error);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { id } = req.params;
            const success = await Car.delete(id);
            if (success) {
                res.json({ message: 'Carro deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Carro não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar o Carro' });
        }
    },
};

module.exports = carController;