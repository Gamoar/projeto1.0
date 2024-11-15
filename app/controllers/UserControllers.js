const User = require('../models/userModel');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter Usuários' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.getById(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter Usuário' });
        }
    },

    createUser: async (req, res) => {
        try {
            const { name, cpf, email, password } = req.body;
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erro ao criar Usuário' });
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updateUser = await User.update({id, name, password, email});
            if (updateUser) {
                res.json(updateUser);
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar Usuário' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const success = await User.delete(id);
            if (success) {
                res.json({ message: 'Usuário deletado com sucesso' });
            } else {
                res.status(404).json({ error: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar Usuário' });
        }
    },
};

module.exports = userController;