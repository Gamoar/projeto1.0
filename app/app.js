const express = require ("express");

const userRoutes = require ("./routes/userRoutes.js");

const app = express();

app.use(express.json());
app.use('/projeto', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});