const User = require('../models/userModel');

const userService = {
    create: async (user) => {
        const hasCpfInDb = await User.findOne("cpf", user.cpf)
        console.log(hasCpfInDb);
        if (hasCpfInDb) throw ({ status: 409, message: "Usuário já cadastrado" });
        const hasEmailInDb = await User.findOne("email", user.email)
        console.log(hasEmailInDb);
        if (hasEmailInDb) throw ({ status: 409, message: "Usuário já cadastrado" });
        const newUser = await User.create(user);
        return newUser;
    },

    login: async (user) => {
        const catchUser = await User.findOne("cpf", user.cpf)
        console.log(catchUser);
        if (!catchUser) throw ({ status: 400, message: "Usuário invalidó" });
        if (catchUser.password!=user.password) throw ({ status: 400, message: "Usuario invalidó" });
        return catchUser;
    },

};

module.exports = userService;
