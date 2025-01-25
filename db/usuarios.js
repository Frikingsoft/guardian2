import mongoose from 'mongoose'

const usuariosSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique:true
    },
    contra: {
        type: String,
        required: true
    },
    rol: {
        type: String, 
        enum: ["administrador", "empresa", "usuario"], 
        required: true
    }
    
},{collection: 'Usuarios'})

const Usuarios = mongoose.model('Usuarios', usuariosSchema)

export { Usuarios }
