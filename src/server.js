const express = require('express');
const dotenv = require('dotenv');
const usersRoute = require('./routes/usersRoute');

dotenv.config();
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas principales
app.use('/users', usersRoute);

// Puerto desde .env o por defecto 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
