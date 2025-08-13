// src/config/db.js
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let db; // Guardar la conexión a la base de datos

async function connectDB() {
    // Si ya hay conexión, usarla
    if (db) return db;

    try {
        // Crear cliente con la URL de Mongo
        const client = new MongoClient(process.env.MONGO_URI);

        // Conectar al servidor
        await client.connect();
        console.log('✅ MongoDB conectado');

        // Seleccionar base de datos
        db = client.db(process.env.DB_NAME);

        // Devolver la base
        return db;
    } catch (error) {
        console.error('❌ Error al conectar con MongoDB:', error);
        process.exit(1); // Salir si falla
    }
}

module.exports = connectDB;