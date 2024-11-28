const User = require('../models/userModel');
const userService = require("../services/userService");


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

    loginUser: async(req,res) =>{
        try {
            const user = await userService.login(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(401).json({ error: "Credenciais inválidas" });
        }
    },

    createUser: async (req, res) => {
        try {
            res.setHeader("Access-Control-Allow-Origin", "*");
            const newUser = await userService.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            if (error.status) return res.status(error.status).json({ error: error.message });
            res.status(500).json({ error: "Erro ao criar Usuário" });
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updateUser = await User.update({ id, name, password, email });
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