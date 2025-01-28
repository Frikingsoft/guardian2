import employee from "../../models/Employee.js"
import bcrypt from "bcryptjs"
let id = ''
const registro =async (req, res)=>{
    let { name ,lastname,tel, address,email,password } = req.body
    password = await encriptar_contra(password)
    generarId()
    let empleado = {
        name,
        lastname,
        email,
        num_employee:id,
        status:"Off Duty",
        tel,
        address,
        entry_date:new Date(),
        password,
        rol:"employee"
    }
    let guardar_empleado = new employee(empleado)
    await guardar_empleado.save() ? res.json({mensaje:"Empleado creado con exito"}) : res.json({mensaje:"Error al crear"})
}
const  generarId= () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    
    for (let i = 0; i < 24; i++) {
        const indice = Math.floor(Math.random() * caracteres.length)
        id += caracteres.charAt(indice)
    }
    return id
}
const encriptar_contra = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash
}

export{
    registro
}