import employee from "../../models/Employee.js"
const registroController = async(req, res, next) => {
   let { name ,lastname,tel, address,email,password,password2 } = req.body 
   let buscar_empleado = await employee.findOne({ email: email })
   if(buscar_empleado===null){
   name = name.toLowerCase()
   lastname = lastname.toLowerCase()
   email = email.toLowerCase()
   address = address.toLowerCase()

   let validar_nombre=false ,validar_apellido=false,validar_telefono, validar_correo = false ,validar_contra = false ,validar_hack={
    nombre: false,
    apellido: false,
    telefono: false,
    direccion:false,
    correo: false,
    contra: false,
    repetir_contra: false,
   }
   let validar = false
   const verificar_hack=()=>{
    const regex = /(script|<|>)/i
        regex.test(name) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el nombre'}) : validar_hack.usuario = true
        regex.test(lastname) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el apellido'}) : validar_hack.apellido = true
        regex.test(tel) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el telefono'}) : validar_hack.telefono = true
        regex.test(address) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en la dirección'}) : validar_hack.direccion = true
        regex.test(email) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el correo'}) : validar_hack.correo = true
        regex.test(password) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en la contraseña'}) : validar_hack.contra = true
        regex.test(password2) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en repetir contraseña'}) : validar_hack.repetir_contra = true
        if(validar_hack.usuario && validar_hack.contra && validar_hack.correo && validar_hack.repetir_contra){
            validar=true
        }
        else{
            validar=false
        }
        return true
        
    }
    verificar_hack()
   const verificar_nombre = () => {
        const regex = /[a-zA-Z]{5,}/
        if(regex.test(name)){
            validar_nombre= true
            return true
        }
        else{
            res.status(400).json({ mensaje: 'El nombre de usuario debe tener al menos 5 caracteres'})
            return false
        }
    }
    const verificar_apellido = () => {
        const regex = /[a-zA-Z]{5,}/
        if(regex.test(lastname)){
            validar_apellido= true
            return true
        }
        else{
            res.status(400).json({ mensaje: 'El nombre de usuario debe tener al menos 5 caracteres'})
            return false
        }
    }
    const verificar_telefono = () => {
        const regex = /^\d+$/
        if(regex.test(tel)){
            validar_telefono= true
            return true
        }
        else{
            res.status(400).json({ mensaje: 'El telefono debe ser unicamente numeros'})
        }
    }
    const verificar_correo = ()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(regex.test(email)){
            validar_correo = true
            return true
        }
        else{
            res.status(400).json({mensaje:"Ingrese un correo Válido"})
            return false
        }
        
        
    }
   const verificar_contra  =()=>{
       if(password === password2){
           const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w<>])[\w!@#$%^&*]{6,}$/
           if(regex.test(password)){
                validar_contra = true
                return true
           }
           else{
                res.status(400).json({ mensaje: 'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un caracter especial'})
           }

        
           
        } 
        else{
            res.status(400).json({ mensaje: 'Las contraseñas no coinciden'})
        }
        if(validar_contra){
            return true
        }
   }
   if(validar && verificar_hack() && verificar_nombre() && verificar_apellido() && verificar_telefono() &&  verificar_correo()  && verificar_contra()){
        next()
    }
}   
 

else{
    res.status(400).json("El usuario ya existe")
}
}


export{
    registroController
}
