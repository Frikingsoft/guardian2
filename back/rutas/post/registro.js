import { conectarDB } from "../../db/db.js"
import { Employee } from "../../db/models/Employee.js"
import bcrypt from "bcryptjs"
conectarDB()
const registro = async(req,res)=>{
    let { usuario, correo , contra } = req.body
    
    let search_employee = await Employee.findOne({email})
    let todos = await Employee.find({})
    console.log(todos)
    if(search_employee === null){
        contra = await bcrypt.hash(contra, 10)
        let nuevoUsuario = {
            
            
        }
        let usuarioDB = new Employee(nuevoUsuario)
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
