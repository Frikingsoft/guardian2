import { conectarDB } from "../../db/db.js"
import { Usuarios } from "../../db/usuarios.js"
import bcrypt from "bcryptjs"
conectarDB()
const registro = async(req,res)=>{
    let { usuario, correo , contra } = req.body
    
    let buscar_usuario = await Usuarios.findOne({correo})
    let todos = await Usuarios.find({})
    console.log(todos)
    if(buscar_usuario === null){
        contra = await bcrypt.hash(contra, 10)
        let nuevoUsuario = {
            usuario,
            correo,
            contra,
            rol:"usuario"
        }
        let usuarioDB = new Usuarios(nuevoUsuario)
        usuarioDB.save()
        res.json({mensaje:"Usuario guardado"})
    }
    else{
        res.json({mensaje:"El correo ya existe"})
    }
   
}
export{
    registro
}
