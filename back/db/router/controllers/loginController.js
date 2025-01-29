import bcrypt from'bcryptjs'
import employee from "../../models/Employee.js"
const loginController = async (req, res, next) => {
    let { password, email } = req.body
    req.buscar_usuario = await employee.findOne({ email })
    if(req.buscar_usuario){
        let comparar = await comparar_contra(password,req.buscar_usuario.password)
        if (comparar){
            next()
        }
        else{
            res.status(401).json({mensaje: "Contraseña incorrecta"})
        }
    }
    else{
        res.status(404).json({mensaje: "Usuario no encontrado"})
    }
    
}
const comparar_contra =async(password,hash)=>{
    const coincide = await bcrypt.compare(password, hash)
    return coincide
}
export {
    loginController
}