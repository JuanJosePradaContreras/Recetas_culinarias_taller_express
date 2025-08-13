const connectDB = require('./config/db');

async function seedData() {
    try {
        const db = await connectDB();

        // Datos de ejemplo
        const sampleUsers = [
            { name: 'Juan Pérez', email: 'juan@example.com' },
            { name: 'María López', email: 'maria@example.com' },
            { name: 'Carlos García', email: 'carlos@example.com' }
        ];

        // Limpia la colección y agrega datos
        await db.collection('users').deleteMany({});
        const result = await db.collection('users').insertMany(sampleUsers);

        console.log(`✅ ${result.insertedCount} usuarios insertados correctamente`);
        process.exit(); // Finaliza el script
    } catch (error) {
        console.error('❌ Error al insertar datos:', error);
        process.exit(1);
    }
}

seedData();