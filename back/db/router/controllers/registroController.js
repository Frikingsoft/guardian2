

const registro = (req, res, next) => {
    console.log(req.body)
    res.status(200).json({mensaje:"ok"})
   /*let { usuario,correo,contra, repetir_contra } = req.body 
   usuario = usuario.toLowerCase()
   correo = correo.toLowerCase()

   let validar_usuario=false ,validar_correo = false ,validar_contra = false ,validar_hack={
    usuario: false,
    correo: false,
    contra: false,
    repetir_contra: false,
   },
   validar=false
   const verificar_hack=()=>{
    const regex = /(script|<|>)/i
        regex.test(usuario) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el nombre'}) : validar_hack.usuario = true
        regex.test(correo) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en el correo'}) : validar_hack.correo = true
        regex.test(contra) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en la contraseña'}) : validar_hack.contra = true
        regex.test(repetir_contra) ? res.status(400).json({ mensaje: 'No se permiten caracteres especiales en repetir contraseña'}) : validar_hack.repetir_contra = true
        if(validar_hack.usuario && validar_hack.contra && validar_hack.correo && validar_hack.repetir_contra){
            validar=true
        }
        return true
        
    }
    const verificar_usuario = () => {
        const regex = /[a-zA-Z]{5,}/
        if(regex.test(usuario)){
            validar_usuario= true
            return true
        }
        else{
            res.status(400).json({ mensaje: 'El nombre de usuario debe tener al menos 5 caracteres'})
            return false
        }
    }
    const verificar_correo = ()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(regex.test(correo)){
            validar_correo = true
            return true
        }
        else{
            res.status(400).json({mensaje:"Ingrese un correo Válido"})
            return false
        }
        
        
    }
   const verificar_contra  =async()=>{
       if(contra === repetir_contra){
           const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w<>])[\w!@#$%^&*]{6,}$/
           if(regex.test(contra)){
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
   verificar_hack() && verificar_correo() && verificar_usuario() && verificar_contra() ? next() : res.status(400).json({mensaje:"Verifique que el Usuario y la Contraseña sean correctos"})
 */  
}


const desencriptar_contra = (contra) => {
   
}
export{
    registro
}
