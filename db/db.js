import mongoose from 'mongoose'

const conectarDB = async () => {
    try {
       await mongoose.connect(process.env.url)

        console.log('Conexión a la base de datos establecida con éxito');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1); // Salir de la aplicación si no se puede conectar
    }
};

export {
    conectarDB
}