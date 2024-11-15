const express = require("express");

const userRoutes = require("./routes/userRoutes.js");
const carRoutes = require("./routes/carsRoutes.js");

const app = express();

app.use(express.json());
app.use('/projeto', userRoutes);
app.use('/projeto', carRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});