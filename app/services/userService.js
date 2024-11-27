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

};

module.exports = userService;
